import React from 'react'
import { Typography, Button } from '@etvas/etvaskit'
import NavBar from '../../navigation/NavBar'
import { Panel } from '@shared/components'
import { trans } from '@shared/i18n'

const SupportScreen = () => {
  return (
    <>
      <Typography variant='pageTitle' as='h1'>
        {trans('Support')}
      </Typography>
      <NavBar />
      <Panel>
        <Panel.Section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            dolorem nemo quas reprehenderit sit doloribus labore omnis,
            veritatis vero quae! Saepe non dignissimos incidunt, nulla rerum et
            aliquam unde eum.
          </p>
          <p>
            Voluptatem modi odio fugit eaque enim ipsam dolore voluptas officia
            consequuntur mollitia dignissimos, velit explicabo, excepturi
            officiis quae similique aperiam voluptates soluta dolor. Magni,
            saepe aperiam. Maiores omnis tenetur repudiandae.
          </p>
          <p>
            Sint voluptatem dolorum cum deserunt sequi numquam recusandae
            quisquam temporibus cupiditate molestiae, amet explicabo qui rem,
            minima architecto accusamus assumenda. Voluptatibus, quae quidem!
            Blanditiis, exercitationem voluptas dolorem ut aliquam eius.
          </p>
          <p>
            Tempore aperiam, porro accusamus voluptatibus maxime facere incidunt
            molestiae, error minima voluptate ratione amet earum nam quos nihil.
            Totam laudantium quae tenetur asperiores consequatur eaque error
            magni eos accusantium inventore?
          </p>
          <Typography as='h3' variant='inlineTitle'>
            {trans('Have more questions?')}
          </Typography>
          <Button variant='accent'>{trans('Contact us')}</Button>
        </Panel.Section>
        <Panel.Image src='https://images.unsplash.com/photo-1521791136064-7986c2920216' />
      </Panel>
    </>
  )
}
export default SupportScreen
