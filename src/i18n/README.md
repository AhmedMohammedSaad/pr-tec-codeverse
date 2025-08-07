# Internationalization (i18n) Setup Guide

This guide explains the complete multilingual setup for the PR TEC Academy website using react-i18next.

## 📁 Project Structure

```
src/
├── i18n/
│   ├── index.ts                 # Main i18n configuration
│   ├── locales/
│   │   ├── en/
│   │   │   └── common.json      # English translations
│   │   └── ar/
│   │       └── common.json      # Arabic translations
│   └── README.md               # This documentation
├── components/
│   ├── LanguageSwitcher.tsx    # Language switcher component
│   └── ExampleI18nUsage.tsx    # Example usage patterns
└── main.tsx                    # i18n initialization
```

## 🚀 Quick Start

### 1. Installation

The following packages are already installed:

```bash
npm install react-i18next i18next i18next-browser-languagedetector i18next-http-backend
```

### 2. Basic Usage

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.description')}</p>
    </div>
  );
}
```

### 3. Language Switching

```tsx
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
    <div>
      <LanguageSwitcher />
      {/* Your app content */}
    </div>
  );
}
```

## 🌍 Supported Languages

- **English (en)**: Left-to-Right (LTR)
- **Arabic (ar)**: Right-to-Left (RTL)

## 📝 Translation File Structure

### Scalable Organization

For larger applications, organize translations by feature/page:

```
locales/
├── en/
│   ├── common.json          # Common UI elements
│   ├── navigation.json      # Navigation items
│   ├── hero.json           # Hero section
│   ├── courses.json        # Courses page
│   ├── about.json          # About page
│   ├── contact.json        # Contact page
│   └── errors.json         # Error messages
└── ar/
    ├── common.json
    ├── navigation.json
    ├── hero.json
    ├── courses.json
    ├── about.json
    ├── contact.json
    └── errors.json
```

### Naming Conventions

1. **Use nested objects** for logical grouping:
   ```json
   {
     "navigation": {
       "home": "Home",
       "about": "About"
     },
     "hero": {
       "title": "Welcome",
       "subtitle": "Learn to Code"
     }
   }
   ```

2. **Use descriptive keys**:
   ```json
   {
     "buttons": {
       "submitForm": "Submit",
       "cancelAction": "Cancel",
       "saveChanges": "Save Changes"
     }
   }
   ```

3. **Avoid deep nesting** (max 3 levels):
   ```json
   {
     "courses": {
       "webDevelopment": {
         "title": "Web Development",
         "description": "Learn modern web technologies"
       }
     }
   }
   ```

## 🔄 RTL (Right-to-Left) Support

### Automatic Direction Handling

The setup automatically handles text direction:

```tsx
import { useIsRTL } from './components/LanguageSwitcher';

function MyComponent() {
  const isRTL = useIsRTL();
  
  return (
    <div className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Content automatically adapts to RTL */}
    </div>
  );
}
```

### CSS Classes for RTL

The following CSS classes are available:

- `.rtl` - Applied to body when RTL language is active
- Direction-aware spacing: `space-x-reverse`
- Conditional positioning based on `isRTL` hook

## 🛠 Advanced Usage

### Interpolation

```json
{
  "welcome": "Welcome, {{name}}!",
  "courseCount": "We have {{count}} courses available"
}
```

```tsx
const { t } = useTranslation();

// Usage
t('welcome', { name: 'John' }); // "Welcome, John!"
t('courseCount', { count: 5 }); // "We have 5 courses available"
```

### Pluralization

```json
{
  "student": "student",
  "student_plural": "students",
  "studentCount": "{{count}} student",
  "studentCount_plural": "{{count}} students"
}
```

```tsx
t('studentCount', { count: 1 }); // "1 student"
t('studentCount', { count: 5 }); // "5 students"
```

### Namespaces

For larger applications, use namespaces:

```tsx
// Load specific namespace
const { t } = useTranslation('courses');

// Use translations from courses namespace
t('webDevelopment.title'); // Instead of t('courses.webDevelopment.title')
```

## 📱 Components

### LanguageSwitcher

A complete language switcher with RTL support:

```tsx
<LanguageSwitcher 
  variant="outline"    // 'default' | 'ghost' | 'outline'
  size="sm"           // 'default' | 'sm' | 'lg'
  className="custom-class"
/>
```

### Hooks

- `useIsRTL()` - Returns true if current language is RTL
- `useLanguageDirection()` - Returns 'rtl' or 'ltr'
- `useTranslation()` - Main translation hook from react-i18next

## 🎨 Styling Best Practices

### 1. Use Conditional Classes

```tsx
const isRTL = useIsRTL();

return (
  <div className={`
    flex gap-4 
    ${isRTL ? 'flex-row-reverse text-right' : 'flex-row text-left'}
  `}>
    {/* Content */}
  </div>
);
```

### 2. Responsive RTL Design

```tsx
<div className={`
  grid grid-cols-1 md:grid-cols-2 gap-4
  ${isRTL ? 'md:grid-flow-col-dense' : ''}
`}>
  {/* Grid items */}
</div>
```

### 3. Icon Positioning

```tsx
<Button className={`flex items-center gap-2`}>
  {!isRTL && <ArrowLeft className="h-4 w-4" />}
  {t('common.back')}
  {isRTL && <ArrowRight className="h-4 w-4" />}
</Button>
```

## 🔧 Configuration Options

### Language Detection

The setup detects language from:
1. localStorage (persistent)
2. Browser navigator language
3. HTML lang attribute
4. Fallback to English

### Customizing Detection

```typescript
// In src/i18n/index.ts
detection: {
  order: ['localStorage', 'navigator', 'htmlTag'],
  caches: ['localStorage'],
  lookupLocalStorage: 'i18nextLng',
  checkWhitelist: true
}
```

## 📊 Performance Optimization

### 1. Lazy Loading

For large applications, implement lazy loading:

```typescript
// Load translations on demand
i18n.loadLanguages(['en', 'ar']).then(() => {
  // Languages loaded
});
```

### 2. Namespace Splitting

```typescript
// Load only required namespaces
const { t } = useTranslation(['common', 'navigation']);
```

## 🧪 Testing

### Testing Components with i18n

```tsx
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

const renderWithI18n = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>
  );
};
```

## 🚀 Deployment Considerations

1. **Build Optimization**: Translation files are bundled with the app
2. **CDN**: Consider serving translation files from CDN for better performance
3. **Caching**: Implement proper caching strategies for translation files
4. **SEO**: Use proper lang attributes and hreflang tags

## 📚 Additional Resources

- [react-i18next Documentation](https://react.i18next.com/)
- [i18next Documentation](https://www.i18next.com/)
- [RTL CSS Guidelines](https://rtlstyling.com/)
- [Arabic Typography Best Practices](https://www.w3.org/International/articles/arabic-typography/)

## 🤝 Contributing

When adding new translations:

1. Add the key to all language files
2. Use descriptive, hierarchical keys
3. Test with both LTR and RTL languages
4. Update this documentation if needed

## 🐛 Troubleshooting

### Common Issues

1. **Missing translations**: Check console for missing key warnings
2. **RTL layout issues**: Verify CSS classes and conditional styling
3. **Language not switching**: Check localStorage and browser settings
4. **Font rendering**: Ensure proper font families for Arabic text