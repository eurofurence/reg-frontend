/*
 * Layout for registration funnel pages that has a blue invoice on the right side.
 */

import { Localized } from '@fluent/react'
import WithInvoiceFunnelLayout from '~/components/funnels/layout/with-invoice'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { InitiatePayment, InitiateSepaPayment } from '~/state/actions/register'
import { buildInvoice } from '~/state/models/invoice'
import {
  getInvoice,
  getStatus,
  hasUnprocessedPayments,
  isEditMode,
} from '~/state/selectors/register'
import type { ReadonlyReactNode } from '~/util/readonly-types'
import { TOTAL_STEPS } from '../constants'
import RegisterHeader from '../header'
import config from '~/config'

export interface WithInvoiceRegisterFunnelLayoutProps {
  readonly children: ReadonlyReactNode
  readonly currentStep: number
  readonly onNext: () => void
}

const WithInvoiceRegisterFunnelLayout = ({
  children,
  currentStep,
  onNext,
}: WithInvoiceRegisterFunnelLayoutProps) => {
  const invoice = useAppSelector(getInvoice)
  const isEdit = useAppSelector(isEditMode())
  const unprocessedPayments = useAppSelector(hasUnprocessedPayments())
  const status = useAppSelector(getStatus())
  const dispatch = useAppDispatch()

  return (
    <Localized id="register-invoice-layout" attrs={{ invoiceTitle: true }}>
      <WithInvoiceFunnelLayout
        header={<RegisterHeader currentStep={currentStep} />}
        isFirstPage={currentStep === 0}
        isLastPage={currentStep === TOTAL_STEPS - 1}
        onNext={onNext}
        invoiceTitle="Your registration"
        invoiceEditLink={
          isEdit &&
          currentStep === TOTAL_STEPS - 1 &&
          !config.disablePackageEditForStatuses.includes(status ?? '')
            ? '/register/ticket/level'
            : undefined
        }
        invoice={invoice ?? buildInvoice([])}
        hideInvoice={status === 'cancelled'}
        unprocessedPayments={unprocessedPayments}
        onPay={() => dispatch(InitiatePayment.create(undefined))}
        onSepa={() => dispatch(InitiateSepaPayment.create(undefined))}
      >
        {children}
      </WithInvoiceFunnelLayout>
    </Localized>
  )
}

export default WithInvoiceRegisterFunnelLayout
