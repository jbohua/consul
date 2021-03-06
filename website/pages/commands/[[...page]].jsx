import { productName, productSlug } from 'data/metadata'
import order from 'data/commands-navigation.js'
import DocsPage from '@hashicorp/react-docs-page'
import {
  generateStaticPaths,
  generateStaticProps,
} from '@hashicorp/react-docs-page/server'

const subpath = 'commands'

export default function CommandsLayout(props) {
  return (
    <DocsPage
      product={{ name: productName, slug: productSlug }}
      subpath={subpath}
      order={order}
      mainBranch="master"
      staticProps={props}
    />
  )
}

export async function getStaticPaths() {
  return generateStaticPaths(subpath)
}

export async function getStaticProps({ params }) {
  return generateStaticProps({
    subpath,
    productName,
    params,
  })
}
