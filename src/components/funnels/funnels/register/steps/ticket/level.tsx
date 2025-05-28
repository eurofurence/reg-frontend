import styled from "@emotion/styled";
import { Localized } from "@fluent/react";
import { RadioGroup } from "@eurofurence/reg-component-library";
import config from "~/config";
import TicketLevelCard from "./level/card";
import TicketLevelAddon, { AugmentedAddon } from "./level/addons/addon";
import FullWidthRegisterFunnelLayout from "~/components/funnels/funnels/register/layout/form/full-width";
import { useFunnelForm } from "~/hooks/funnels/form";
import type { ReadonlyRouteComponentProps } from "~/util/readonly-types";
import { useAppSelector } from "~/hooks/redux";
import { getTicketType } from "~/state/selectors/register";
import { createLuxonFluentDateTime } from "~/util/fluent-values";
import TicketLevelFootnote from "~/components/funnels/funnels/register/steps/ticket/level/footnote";

const TicketLevelGrid = styled.section`
	display: grid;
	gap: 20px;
	margin-top: 2em;

	@media not all and (min-width: 950px) {
		grid: auto-flow auto / 1fr;
	}

	@media (min-width: 950px) {
		grid: auto-flow 1fr / repeat(3, 1fr);
	}
`;

const ModifiersSection = styled.section`
	margin-top: 1em;
`;

const AddonsSection = styled.section`
	margin-top: 4.5em;
`;

const AddonsContainer = styled.section`
	margin-top: 3em;
`;

type AddonSelection = {
	[key: string]: {
		readonly selected?: boolean;
	};
};

const TicketLevel = (_: ReadonlyRouteComponentProps) => {
	const ticketType = useAppSelector(getTicketType());
	if (!ticketType) return null;
	const formContext = useFunnelForm("register-ticket-level");
	const { register, handleSubmit } = formContext;

	const nonSelectedAddonIds = Object.entries(
		formContext.getValues("addons") as AddonSelection
	)
		.filter(([, v]) => v.selected === false)
		.map(([k]) => k as string);

	// how would I do this in a type safe manner?
	const requirementsMet = (reqs: readonly string[] | undefined) => {
		if (reqs !== undefined && reqs.length > 0) {
			const missingRequirements = nonSelectedAddonIds.filter((id) =>
				reqs.includes(id)
			);

			return missingRequirements.length === 0;
		} else {
			return true;
		}
	};

	return (
		<FullWidthRegisterFunnelLayout onNext={handleSubmit} currentStep={1}>
			<form onSubmit={handleSubmit}>
				<section>
					<Localized id="register-ticket-level-title">
						<h3>Select your ticket</h3>
					</Localized>
					<TicketLevelGrid>
						<RadioGroup name="level">
							{Object.entries(config.ticketLevels).map(([id, { prices }]) => (
								<Localized
									key={id}
									id={`register-ticket-level-card-${id}`}
									attrs={{ label: true, priceLabel: true }}
									vars={{
										type: ticketType.type,
										...(ticketType.type !== "day"
											? {}
											: {
													day: createLuxonFluentDateTime(ticketType.day),
													dow: ticketType.day.weekday,
											  }),
									}}
								>
									<TicketLevelCard
										id={id}
										price={prices[ticketType.type]}
										label="Ticket level"
										priceLabel="A ticket"
										footnoteMarker={ticketType.type !== "day" ? "*" : ""}
										{...register("level", { required: true })}
									>
										A ticket level
									</TicketLevelCard>
								</Localized>
							))}
						</RadioGroup>
					</TicketLevelGrid>
				</section>
				{ticketType.type !== "day" ? (
					<ModifiersSection>
						<Localized
							id="register-ticket-level-modifiers-early-bird"
							attrs={{ label: true, description: true, price: true }}
						>
							<TicketLevelFootnote
								marker="*"
								label="Early Bird Discount"
								price="-15"
							></TicketLevelFootnote>
						</Localized>
						<Localized
							id="register-ticket-level-modifiers-late-fee"
							attrs={{ label: true, description: true, price: true }}
						>
							<TicketLevelFootnote
								marker=""
								label="Late Fee"
								price="+15"
							></TicketLevelFootnote>
						</Localized>
						<Localized
							id="register-ticket-level-footnote-late-sponsors"
							attrs={{ label: true, description: true, price: false }}
						>
							<TicketLevelFootnote
								marker="**"
								label="Subject to availability if booked less than 1 month before the convention!"
								price=""
							></TicketLevelFootnote>
						</Localized>
					</ModifiersSection>
				) : (
					<ModifiersSection>
						<Localized
							id="register-ticket-level-footnote-late-sponsors"
							attrs={{ label: true, description: true, price: false }}
						>
							<TicketLevelFootnote
								marker="**"
								label="Subject to availability if booked less than 1 month before the convention!"
								price=""
							></TicketLevelFootnote>
						</Localized>
					</ModifiersSection>
				)}
				<AddonsSection>
					<Localized id="register-ticket-level-addons-title">
						<h3>Select add-ons</h3>
					</Localized>
					<AddonsContainer>
						{Object.entries(config.addons)
							.filter(([, addon]) => !addon.hidden)
							.filter(
								([, addon]) =>
									!(
										addon.unavailableFor?.type?.includes(ticketType.type) ??
										false
									)
							)
							.filter(
								([, addon]) =>
									!(
										addon.unavailableFor?.level?.includes(
											formContext.getValues("level")
										) ?? false
									)
							)
							.filter(([, addon]) =>
								requirementsMet(addon.requires as string[] | undefined)
							)
							.filter(([id, addon]) => {
								if (addon.unavailable) {
									return !!formContext.getValues("addons")?.[id]?.selected;
								}
								return true;
							})
							.map(([id, addon]) => (
								// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
								<TicketLevelAddon
									key={id}
									addon={{ id, ...addon } as AugmentedAddon}
									formContext={formContext}
								/>
							))}
					</AddonsContainer>
				</AddonsSection>
			</form>
		</FullWidthRegisterFunnelLayout>
	);
};

export default TicketLevel;
