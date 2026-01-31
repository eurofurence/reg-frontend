import { Localized } from '@fluent/react'
import {
  Checkbox,
  FieldSet,
  Form,
  TextArea,
} from '@eurofurence/reg-component-library'
import WithInvoiceRegisterFunnelLayout from '~/components/funnels/funnels/register/layout/form/with-invoice'
import { useFunnelForm } from '~/hooks/funnels/form'
import type { ReadonlyRouteComponentProps } from '~/util/readonly-types'

const Optional = (_: ReadonlyRouteComponentProps) => {
  const { register, handleSubmit } = useFunnelForm('register-optional-info')

  return (
    <WithInvoiceRegisterFunnelLayout onNext={handleSubmit} currentStep={4}>
      <Localized id="register-optional-info-title">
        <h3>Optional information</h3>
      </Localized>

      <Form onSubmit={handleSubmit}>
        <Localized
          id="register-optional-info-notifications"
          attrs={{ legend: true }}
        >
          <FieldSet legend="I would like to receive event information and announcements about">
            <Localized
              id="register-optional-info-notifications-art"
              attrs={{ label: true }}
            >
              <Checkbox label="Art" {...register('notifications.art')} />
            </Localized>
            <Localized
              id="register-optional-info-notifications-animation"
              attrs={{ label: true }}
            >
              <Checkbox
                label="Animation"
                {...register('notifications.animation')}
              />
            </Localized>
            <Localized
              id="register-optional-info-notifications-music"
              attrs={{ label: true }}
            >
              <Checkbox label="Music" {...register('notifications.music')} />
            </Localized>
            <Localized
              id="register-optional-info-notifications-fursuiting"
              attrs={{ label: true }}
            >
              <Checkbox
                label="Fursuiting"
                {...register('notifications.fursuiting')}
              />
            </Localized>
          </FieldSet>
        </Localized>
        <Localized id="register-optional-info-conbook" attrs={{ legend: true }}>
          <FieldSet legend="Conbook">
            <Localized
              id="register-optional-info-conbook-digital-only"
              attrs={{ label: true }}
            >
              <Checkbox
                label="I only want to receive a digital version of the convention booklet."
                {...register('digitalConbook')}
              />
            </Localized>
          </FieldSet>
        </Localized>
        <Localized
          id="register-optional-info-comments"
          attrs={{ label: true, placeholder: true }}
        >
          <TextArea
            label="Comments"
            placeholder="I would like to know more about..."
            {...register('comments')}
          />
        </Localized>
      </Form>
    </WithInvoiceRegisterFunnelLayout>
  )
}

export default Optional
