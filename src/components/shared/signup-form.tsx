import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold text-pulsai-primary">
            Créer votre compte
          </h1>
          <p className="text-muted-foreground text-sm text-balance">
            Remplissez le formulaire ci-dessous pour créer votre compte
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="name">Nom complet</FieldLabel>
          <Input id="name" type="text" placeholder="Jean Dupont" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Adresse e-mail</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="exemple@email.com"
            required
          />
          <FieldDescription>
            Nous utiliserons cette adresse pour vous contacter.
            Elle ne sera jamais partagée avec des tiers.
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Mot de passe</FieldLabel>
          <Input id="password" type="password" required />
          <FieldDescription>
            Doit contenir au moins 8 caractères.
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="confirm-password">
            Confirmer le mot de passe
          </FieldLabel>
          <Input id="confirm-password" type="password" required />
          <FieldDescription>
            Veuillez confirmer votre mot de passe.
          </FieldDescription>
        </Field>

        <Field>
          <Button
            type="submit"
            className="bg-pulsai-primary/80 hover:bg-pulsai-primary"
          >
            Créer un compte
          </Button>
        </Field>

        <FieldSeparator>Ou continuer avec</FieldSeparator>

        <Field>
          <Button variant="outline" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={800}
              height={800}
              viewBox="-0.5 0 48 48"
            >
              <title>{"Google-color"}</title>
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#FBBC05"
                  d="M9.827 24c0-1.524.253-2.986.705-4.356l-7.909-6.04A23.456 23.456 0 0 0 .213 24c0 3.737.868 7.26 2.407 10.388l7.905-6.05A13.885 13.885 0 0 1 9.827 24"
                />
                <path
                  fill="#EB4335"
                  d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094L39.202 6.4C35.036 2.773 29.695.533 23.714.533a23.43 23.43 0 0 0-21.09 13.071l7.908 6.04a13.849 13.849 0 0 1 13.182-9.51"
                />
                <path
                  fill="#34A853"
                  d="M23.714 37.867a13.849 13.849 0 0 1-13.182-9.51l-7.909 6.038a23.43 23.43 0 0 0 21.09 13.072c5.732 0 11.205-2.036 15.312-5.849l-7.507-5.804c-2.118 1.335-4.786 2.053-7.804 2.053"
                />
                <path
                  fill="#4285F4"
                  d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804c4.314-4.004 7.12-9.969 7.12-17.618"
                />
              </g>
            </svg>
            S’inscrire avec Google
          </Button>

          <FieldDescription className="px-6 text-center">
            Vous avez déjà un compte ?{" "}
            <Link href="/login" className="underline underline-offset-4">
              Se connecter
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
