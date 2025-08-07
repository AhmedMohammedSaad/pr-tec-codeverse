import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useIsRTL } from './LanguageSwitcher';
import { Badge } from './ui/badge';

/**
 * Example component demonstrating various i18n usage patterns
 * This component shows:
 * - Basic translation usage with t() function
 * - Interpolation with variables
 * - Pluralization
 * - Namespace usage
 * - RTL-aware styling
 */
const ExampleI18nUsage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = useIsRTL();

  // Example data for interpolation
  const studentCount = 150;
  const courseName = "Web Development";

  return (
    <div className={`container mx-auto p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="space-y-6">
        {/* Basic Translation Example */}
        <Card>
          <CardHeader>
            <CardTitle>{t('hero.title')}</CardTitle>
            <CardDescription>{t('hero.subtitle')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{t('hero.description')}</p>
            <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              <Button>{t('hero.cta')}</Button>
              <Button variant="outline">{t('hero.learnMore')}</Button>
            </div>
          </CardContent>
        </Card>

        {/* Interpolation Example */}
        <Card>
          <CardHeader>
            <CardTitle>Interpolation Example</CardTitle>
            <CardDescription>
              Showing how to use variables in translations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              {/* Example of interpolation - you would add this to your JSON files */}
              Current language: <Badge variant="secondary">{i18n.language}</Badge>
            </p>
            <p className="mb-2">
              Student count: <Badge variant="outline">{studentCount}</Badge>
            </p>
            <p>
              Course: <Badge>{courseName}</Badge>
            </p>
          </CardContent>
        </Card>

        {/* Navigation Items Example */}
        <Card>
          <CardHeader>
            <CardTitle>Navigation Items</CardTitle>
            <CardDescription>
              Demonstrating navigation translations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className={`flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              <Badge variant="outline">{t('navigation.home')}</Badge>
              <Badge variant="outline">{t('navigation.about')}</Badge>
              <Badge variant="outline">{t('navigation.courses')}</Badge>
              <Badge variant="outline">{t('navigation.children')}</Badge>
              <Badge variant="outline">{t('navigation.testimonials')}</Badge>
              <Badge variant="outline">{t('navigation.contact')}</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Course Information Example */}
        <Card>
          <CardHeader>
            <CardTitle>{t('courses.title')}</CardTitle>
            <CardDescription>{t('courses.subtitle')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Web Development Course */}
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">{t('courses.webDevelopment.title')}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {t('courses.webDevelopment.description')}
                </p>
                <div className="space-y-1 text-sm">
                  <p><strong>Duration:</strong> {t('courses.webDevelopment.duration')}</p>
                  <p><strong>Level:</strong> {t('courses.webDevelopment.level')}</p>
                </div>
                <Button size="sm" className="mt-3 w-full">
                  {t('courses.enrollNow')}
                </Button>
              </div>

              {/* Mobile App Course */}
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">{t('courses.mobileApp.title')}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {t('courses.mobileApp.description')}
                </p>
                <div className="space-y-1 text-sm">
                  <p><strong>Duration:</strong> {t('courses.mobileApp.duration')}</p>
                  <p><strong>Level:</strong> {t('courses.mobileApp.level')}</p>
                </div>
                <Button size="sm" className="mt-3 w-full">
                  {t('courses.enrollNow')}
                </Button>
              </div>

              {/* Data Science Course */}
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">{t('courses.dataScience.title')}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {t('courses.dataScience.description')}
                </p>
                <div className="space-y-1 text-sm">
                  <p><strong>Duration:</strong> {t('courses.dataScience.duration')}</p>
                  <p><strong>Level:</strong> {t('courses.dataScience.level')}</p>
                </div>
                <Button size="sm" className="mt-3 w-full">
                  {t('courses.enrollNow')}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common UI Elements */}
        <Card>
          <CardHeader>
            <CardTitle>Common UI Elements</CardTitle>
            <CardDescription>
              Frequently used UI text translations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className={`flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              <Button size="sm" variant="outline">{t('common.save')}</Button>
              <Button size="sm" variant="outline">{t('common.cancel')}</Button>
              <Button size="sm" variant="outline">{t('common.edit')}</Button>
              <Button size="sm" variant="outline">{t('common.delete')}</Button>
              <Button size="sm" variant="outline">{t('common.close')}</Button>
              <Button size="sm" variant="outline">{t('common.next')}</Button>
              <Button size="sm" variant="outline">{t('common.previous')}</Button>
            </div>
          </CardContent>
        </Card>

        {/* RTL Demonstration */}
        <Card>
          <CardHeader>
            <CardTitle>RTL Layout Demonstration</CardTitle>
            <CardDescription>
              This card shows how the layout adapts to RTL languages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className="flex-1">
                <p className="mb-2">
                  Current direction: <Badge>{isRTL ? 'RTL' : 'LTR'}</Badge>
                </p>
                <p className="text-sm text-muted-foreground">
                  Notice how the layout automatically adjusts based on the selected language.
                  Arabic text flows from right to left, while English flows from left to right.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Button size="sm">{t('common.settings')}</Button>
                <Button size="sm" variant="outline">{t('common.language')}</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExampleI18nUsage;