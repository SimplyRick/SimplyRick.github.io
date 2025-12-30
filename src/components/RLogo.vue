<script lang="ts">
const ALLOWED_TYPES = new Set(['logoIcon', 'logoFull'])

export default {
	name: 'RLogo',
	props: {
		type: {
			type: String,
			required: true,
			validator: (value: string) => ALLOWED_TYPES.has(value)
		},
		logoRedirect: {
			type: String,
			default: ''
		}
	}
}
</script>
<template>
	<div class="logo">
		<component
			:is="logoRedirect ? 'a' : 'span'"
			:href="logoRedirect"
			class="logo__wrapper">
			<div
				v-if="type === 'logoIcon' || type === 'logoFull'"
				class="logo__initials">
				<span>SR</span>
			</div>
			<span v-if="type === 'logoFull'">// PORTFOLIO</span>
		</component>
	</div>
</template>
<style scoped lang="less">
.logo {
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Monomaniac One', sans-serif;
	font-weight: 400;
	font-style: normal;
	font-size: 1.5rem;
	font-weight: bold;
	white-space: nowrap;
	margin: 0;
	padding: 0;
	gap: 0.5rem;

	&__wrapper {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		color: inherit;
	}

	&__initials {
		width: 2rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-primary);
		color: var(--bg-base);
		border-radius: 4px;
	}
	span {
		margin-top: -4px;
		padding: 0;
	}
}
</style>
