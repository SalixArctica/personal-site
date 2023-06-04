# Salix Circuits UI

![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=personal-site-7okbpkt1b-salixarctica&style=for-the-badge)
![License](https://img.shields.io/github/license/SalixArctica/personal-site?style=for-the-badge)

NEXT app for my personal site

Deployed [here](https://salixcircuits.com)

Based off [with-styled-components Next.js example](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components)

### Developing locally

Grab deps
```bash
npm install
```

Run dev server
```bash
npm run dev
```

### Notes

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

<details>
<summary>Click to expand workaround example</summary>
<br />

**components/StyledLink.js**

```javascript
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`
```

**pages/index.js**

```javascript
import StyledLink from '../components/StyledLink'

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
)
```

</details>