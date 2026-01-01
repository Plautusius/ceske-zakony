# Nastaveni automaticke kontroly zakonu

## Co to dela?

- Kazde **pondeli v 8:00** automaticky zkontroluje nove zakony
- Pokud najde nove, posle ti **email** na platlvlastislav1@gmail.com
- Ty pak spustis Claude a reknes mu, at je prida

## Jak nastavit emaily (5 minut)

### Krok 1: Vytvorit Gmail App Password

1. Jdi na: https://myaccount.google.com/apppasswords
2. Prihlad se do sveho Gmail uctu
3. Vyber "Mail" a "Windows Computer"
4. Klikni "Generate"
5. **Zkopiruj 16-mistne heslo** (napr. `abcd efgh ijkl mnop`)

> Poznamka: Pokud nevidis App passwords, musis zapnout 2FA na svem uctu.

### Krok 2: Pridat secrets do GitHub

1. Jdi na: https://github.com/Plautusius/ceske-zakony/settings/secrets/actions
2. Klikni "New repository secret"
3. Pridej DVA secrets:

| Name | Value |
|------|-------|
| `EMAIL_USERNAME` | platlvlastislav1@gmail.com |
| `EMAIL_PASSWORD` | (tvoje 16-mistne App Password) |

### Krok 3: Otestovat

1. Jdi na: https://github.com/Plautusius/ceske-zakony/actions
2. Vyber "Kontrola novych zakonu"
3. Klikni "Run workflow"
4. Pockej 1-2 minuty
5. Mel bys dostat testovaci email

## Jak pridat zakon rucne

Kdyz dostanes email o novem zakonu:

1. Otevri Claude Code
2. Rekni: "Pridej zakon 123/2025 na portal Ceske Zakony"
3. Claude automaticky:
   - Stahne plne zneni
   - Vytvori PDF
   - Prida kartu na web
   - Commitne a pushne

## Jak vypnout

Jdi na GitHub Actions a "Disable workflow"
