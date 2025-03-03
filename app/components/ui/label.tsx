import { useRouter } from "next/router";
import { Locale, routing } from "../../../i18n/routing";
import { ReactNode } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

type Props = {
  children?: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const { pathname, query } = router; // استخدم query بدلاً من params

  function onSelectChange(nextLocale: string) {
    router.replace({ pathname, query }, undefined, { locale: nextLocale as Locale });
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger className="w-[80px] h-8 border-none bg-transparent focus:ring-0 focus:ring-offset-0" aria-label={label}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}


