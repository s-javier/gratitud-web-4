import { Text } from '~/components/ui/text'

export default function WelcomePage() {
  return (
    <>
      <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
        Bienvenido
      </h1>
      <hr
        role="presentation"
        className="mt-6 mb-10 w-full border-t border-zinc-950/10 dark:border-white/10"
      ></hr>
      <Text>Bienvenido a Gratitud.</Text>
    </>
  )
}
