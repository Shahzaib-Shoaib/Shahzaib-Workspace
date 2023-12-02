import { getDictionary } from '../../get-dictionary'
import { Locale } from '@i18n-config'
import Counter from './components/counter'
import LocaleSwitcher from './components/locale-switcher'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <>
      <LocaleSwitcher />
      <p>Current locale: {lang}</p>
      <p className='bg-orange-600'>
        This text is rendered on the server:{' '}
        {/* {dictionary['server-component'].welcome} */}
      </p>
      <Counter dictionary={dictionary} />
    </>
  )
}
