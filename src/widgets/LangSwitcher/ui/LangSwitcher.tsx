import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button theme={ThemeButton.CLEAR} onClick={toggleLang}>
      {t('Язык')}
    </Button>
  );
};
