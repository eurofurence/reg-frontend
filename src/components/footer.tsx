import styled from '@emotion/styled'
import { Localized } from '@fluent/react'
import {
  Footer as CLFooter,
  MediaQueries,
} from '@eurofurence/reg-component-library'
import { useAppSelector } from '~/hooks/redux'
import { getLastSaved } from '~/state/selectors/autosave'
import config from '~/config'

const Links = styled.nav`
	grid-area: links;
	display: flex;

	@media ${MediaQueries.laptop}, ${MediaQueries.desktop} {
		gap: 2em;
	}

	@media ${MediaQueries.phone}, ${MediaQueries.tablet} {
		flex-direction: column;
		gap: 1em;
	}
`

const SaveTime = styled.section`
	grid-area: save-time;

	@media ${MediaQueries.laptop}, ${MediaQueries.desktop} {
		justify-self: end;
	}
`

const Credits = styled.section`
	grid-area: credits;
	font-size: 1.2rem;

	@media ${MediaQueries.laptop}, ${MediaQueries.desktop} {
		justify-self: end;
	}
`

const Grid = styled.div`
	display: grid;
	gap: 3em;

	@media ${MediaQueries.laptop}, ${MediaQueries.desktop} {
		grid: "links save-time" auto
		      "links credits" auto
		      / max-content auto;
	}

	@media ${MediaQueries.phone}, ${MediaQueries.tablet} {
		grid: "save-time" auto
		      "links" auto
				"credits" auto
		      / 1fr;
		text-align: center;
	}
`

const Footer = () => {
  const lastSaved = useAppSelector(getLastSaved())

  return (
    <CLFooter>
      <Grid>
        <SaveTime>
          {lastSaved === undefined ? undefined : (
            <Localized id="footer-last-saved" vars={{ lastSaved }}>
              <p>Your information was last saved on {lastSaved.toString()}.</p>
            </Localized>
          )}
        </SaveTime>
        <Links>
          <Localized id="footer-links-privacy-policy">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={config.websiteLinks.privacyStatement}
            >
              Privacy policy
            </a>
          </Localized>
          <Localized id="footer-links-legal-info">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={config.websiteLinks.imprint}
            >
              Legal info
            </a>
          </Localized>
          <Localized id="footer-links-policies">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={config.websiteLinks.policies}
            >
              Policies
            </a>
          </Localized>
          <Localized id="footer-links-contact">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={config.websiteLinks.contact}
            >
              Contact Eurofurence
            </a>
          </Localized>
        </Links>
        <Credits>
          Artwork © 2022{' '}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="http://pan-hesekiel-shiroi.de/"
          >
            Pan Hesekiel Shiroi
          </a>
        </Credits>
      </Grid>
    </CLFooter>
  )
}

export default Footer
