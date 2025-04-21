import { Link } from 'react-router'
import { Button } from '~/components/ui/button'
import { Field, Label } from '~/components/ui/fieldset'
import { Heading } from '~/components/ui/heading'
import { Input } from '~/components/ui/input'

export default function AuthLoginPage() {
  return (
    <div className="grid w-full max-w-sm grid-cols-1 gap-8">
      {/* <Logo className="h-6 text-zinc-950 dark:text-white forced-colors:text-[CanvasText]" /> */}
      <Heading>Ingresa a tu cuenta</Heading>
      <Field>
        <Label>Email</Label>
        <Input type="email" name="email" />
      </Field>
      <Link to="/admin">
        <Button type="submit" className="w-full mt-4">
          Ingresar
        </Button>
      </Link>
    </div>
  )
}
