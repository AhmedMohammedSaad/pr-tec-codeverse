import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Globe, Check } from 'lucide-react';
import { availableLanguages, getLanguageDirection } from '../i18n';
import { cn } from '../lib/utils';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg';
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className,
  variant = 'ghost',
  size = 'default',
}) => {
  const { i18n, t } = useTranslation();

  // Update document direction and language when language changes
  useEffect(() => {
    const currentLanguage = i18n.language;
    const direction = getLanguageDirection(currentLanguage);
    
    // Update document direction
    document.documentElement.dir = direction;
    document.documentElement.lang = currentLanguage;
    
    // Update body class for RTL styling
    if (direction === 'rtl') {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }, [i18n.language]);

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  const currentLanguage = availableLanguages.find(
    (lang) => lang.code === i18n.language
  ) || availableLanguages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={cn(
            'flex items-center gap-2 min-w-[120px] justify-start',
            className
          )}
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage.name}</span>
          <span className="sm:hidden">{currentLanguage.code.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px]">
        {availableLanguages.map((language) => {
          const isSelected = language.code === i18n.language;
          return (
            <DropdownMenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={cn(
                'flex items-center justify-between cursor-pointer',
                isSelected && 'bg-accent'
              )}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{language.name}</span>
                <span className="text-xs text-muted-foreground uppercase">
                  {language.code}
                </span>
              </div>
              {isSelected && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;

// Hook for getting current language direction
export const useLanguageDirection = () => {
  const { i18n } = useTranslation();
  return getLanguageDirection(i18n.language);
};

// Hook for checking if current language is RTL
export const useIsRTL = () => {
  const direction = useLanguageDirection();
  return direction === 'rtl';
};