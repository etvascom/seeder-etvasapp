import React from 'react'
import { Typography, CardWithImage, Button } from '@etvas/etvaskit'
import { T } from '@etvas/i18n'

const SupportScreen = () => {
  return (
    <CardWithImage
      p={[2, 4]}
      variant='hero'
      imageUrl='/media/support.png'
      imageSize={0.48}>
      <Typography variant='textSmall' mb={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem
        nemo quas reprehenderit sit doloribus labore omnis, veritatis vero quae!
        Saepe non dignissimos incidunt, nulla rerum et aliquam unde eum.
      </Typography>
      <Typography variant='textSmall' mb={3}>
        Voluptatem modi odio fugit eaque enim ipsam dolore voluptas officia
        consequuntur mollitia dignissimos, velit explicabo, excepturi officiis
        quae similique aperiam voluptates soluta dolor. Magni, saepe aperiam.
        Maiores omnis tenetur repudiandae.
      </Typography>
      <Typography variant='textSmall' mb={3}>
        Sint voluptatem dolorum cum deserunt sequi numquam recusandae quisquam
        temporibus cupiditate molestiae, amet explicabo qui rem, minima
        architecto accusamus assumenda. Voluptatibus, quae quidem! Blanditiis,
        exercitationem voluptas dolorem ut aliquam eius.
      </Typography>
      <Typography variant='textSmall' mb={3}>
        Tempore aperiam, porro accusamus voluptatibus maxime facere incidunt
        molestiae, error minima voluptate ratione amet earum nam quos nihil.
        Totam laudantium quae tenetur asperiores consequatur eaque error magni
        eos accusantium inventore?
      </Typography>
      <Typography as='h3' variant='titleSmall'>
        <T label='text.haveQuestions' />
      </Typography>
      <Button variant='primary'>
        <T label='button.contactUs' />
      </Button>
    </CardWithImage>
  )
}
export default SupportScreen
