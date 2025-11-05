'use client';

import { cn } from '@eluelu/elu-ui/lib/classes';
import { heights } from '@eluelu/elu-ui/lib/sizing';
import {
  AsYouType,
  type CountryCode,
  getCountries,
  getCountryCallingCode,
  parsePhoneNumberWithError,
} from 'libphonenumber-js';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';

import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { Input } from './input';
import { Skeleton } from './skeleton';

const getSystemCountryCode = (): CountryCode | null => {
  try {
    const userLanguage = (navigator as { userLanguage?: string }).userLanguage;
    const locale = navigator.language || userLanguage;
    const countryCode = locale?.split('-')[1]?.toUpperCase();

    if (countryCode && getCountries().includes(countryCode as CountryCode)) {
      return countryCode as CountryCode;
    }
  } catch {
    // Fallback to null
  }

  return null;
};

interface PhoneInputProps
  extends Omit<
    React.ComponentPropsWithoutRef<'input'>,
    'value' | 'onChange' | 'type' | 'error'
  > {
  value?: string;
  onChange?: (value: string, e164?: string) => void;
  defaultCountry?: CountryCode;
  enableCountrySelect?: boolean;
  radius?: 'default' | 'pill' | 'none';
  error?: boolean;
}

const PhoneInputSkeleton: RC<{ enableCountrySelect?: boolean }> = ({
  enableCountrySelect = true,
}) => (
  <div className="flex gap-2">
    {enableCountrySelect && (
      <Skeleton className={cn(heights.base, 'min-w-[120px]')} />
    )}
    <Skeleton className={cn(heights.base, 'flex-1')} />
  </div>
);

const PhoneInput: RC<PhoneInputProps> = ({
  className,
  radius,
  value = '',
  onChange,
  defaultCountry,
  enableCountrySelect = true,
  disabled,
  error: _error,
  ...props
}) => {
  const [countryCode, setCountryCode] = React.useState<CountryCode | null>(
    () => {
      return defaultCountry || getSystemCountryCode();
    }
  );
  const [displayValue, setDisplayValue] = React.useState(value);
  const [isValid, setIsValid] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  const handlePhoneChange = React.useCallback(
    (inputValue: string) => {
      if (!countryCode) {
        setDisplayValue(inputValue);
        if (onChange) {
          onChange(inputValue, undefined);
        }
        return;
      }

      try {
        const formatter = new AsYouType(countryCode);
        const formatted = formatter.input(inputValue);
        const phoneNumber = formatter.getNumber();

        let e164: string | undefined;
        let valid = false;

        if (phoneNumber) {
          e164 = phoneNumber.format('E.164');
          valid = phoneNumber.isValid();
        } else if (inputValue) {
          try {
            if (inputValue.startsWith('+')) {
              const parsed = parsePhoneNumberWithError(inputValue);
              e164 = parsed.format('E.164');
              valid = parsed.isValid();
            } else {
              const parsed = parsePhoneNumberWithError(inputValue, countryCode);
              e164 = parsed.format('E.164');
              valid = parsed.isValid();
            }
          } catch {
            // Ignore parse errors
          }
        }

        setIsValid(inputValue ? valid : undefined);
        setDisplayValue(formatted);

        if (onChange) {
          onChange(formatted, e164);
        }
      } catch {
        setDisplayValue(inputValue);
        setIsValid(false);

        if (onChange) {
          onChange(inputValue, undefined);
        }
      }
    },
    [countryCode, onChange]
  );

  const handleCountryChange = React.useCallback(
    (newCountry: CountryCode) => {
      setCountryCode(newCountry);

      if (displayValue) {
        try {
          const formatter = new AsYouType(newCountry);
          const formatted = formatter.input(displayValue);
          const phoneNumber = formatter.getNumber();

          let e164: string | undefined;
          if (phoneNumber) {
            e164 = phoneNumber.format('E.164');
          }

          setDisplayValue(formatted);

          if (onChange) {
            onChange(formatted, e164);
          }
        } catch {
          // Keep original value
        }
      }
    },
    [displayValue, onChange]
  );

  const allCountries = React.useMemo(() => {
    const countries = getCountries();
    return countries;
  }, []);

  const callingCode = React.useMemo(() => {
    if (!countryCode) return '';
    try {
      return `+${getCountryCallingCode(countryCode)}`;
    } catch {
      return '';
    }
  }, [countryCode]);

  return (
    <div className="flex gap-2">
      {enableCountrySelect && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="min-w-[120px] justify-between"
              disabled={disabled}
              radius={radius}
              type="button"
              variant="outline"
            >
              <span>{callingCode}</span>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="max-h-[300px] overflow-y-auto flex flex-col gap-1 p-1"
          >
            {allCountries.map((country) => {
              const code = getCountryCallingCode(country);
              return (
                <DropdownMenuItem
                  key={country}
                  active={country === countryCode}
                  onClick={() => handleCountryChange(country)}
                >
                  {country} +{code}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      <Input
        type="tel"
        value={displayValue}
        onChange={(e) => handlePhoneChange(e.target.value)}
        disabled={disabled}
        aria-invalid={isValid === false ? true : undefined}
        radius={radius}
        className={className}
        {...props}
      />
    </div>
  );
};

export { PhoneInput, type PhoneInputProps, PhoneInputSkeleton };
