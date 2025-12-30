<script lang="ts">
const ALLOWED_TYPES = new Set(['small', 'medium', 'large'])

export default {
	name: 'RCard',
	props: {
		title: {
			type: String,
			default: ''
		},
		subtitle: {
			type: String,
			default: ''
		},
		avatarSource: {
			type: String,
			default: ''
		},
		avatarRedirect: {
			type: String,
			default: ''
		},
		/**
		 * Size of the card: small, medium, large
		 * @type {String}
		 * small = width 100%/3, height 300px
		 * medium = width 100%/2, height 250px
		 * large = width 100%, height 200px (default)
		 */
		cardSize: {
			type: String,
			required: true,
			validator: (value: string) => ALLOWED_TYPES.has(value)
		}
	}
}
</script>

<template>
	<div :class="`card-component m--${cardSize}`">
		<header v-if="title">
			<!-- Header part -->
			<div :class="`header-container--${cardSize}`">
				<h2>{{ title }}</h2>
				<p
					v-if="subtitle"
					class="subtitle">
					{{ subtitle }}
				</p>
			</div>

			<!-- Avatar part -->
			<component
				:is="avatarRedirect ? 'a' : 'span'"
				v-if="avatarSource"
				:href="avatarRedirect">
				<img
					:class="`avatar avatar--${cardSize}`"
					:src="avatarSource"
					alt="Avatar" />
			</component>
		</header>
		<span
			v-if="title"
			class="divider" />
		<main class="card-content">
			<slot />
		</main>
	</div>
</template>

<style scoped lang="less">
.card-component {
	// border: 1px solid var(--border-light);
	// border-radius: 8px;
	padding: 1rem;
	margin: 1rem 0;
	box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);
	background-color: var(--card-background);

	&.m--small {
		width: calc(100% / 3 - 3rem);
		height: 300px;
	}
	&.m--medium {
		width: calc(100% / 2 - 3rem);
		height: 250px;
	}
	&.m--large {
		width: 100%;
		height: 200px;
	}
}

header {
	display: flex;
	justify-content: space-between;
	align-items: center;

	h2 {
		margin: auto;
	}

	p {
		margin: auto;
		font-size: 0.875rem;
		color: var(--text-secondary);
	}

	.header-container {
		&--small {
			height: 55px;
		}
		&--medium {
			height: 65px;
		}
		&--large {
			height: 75px;
		}
	}

	.avatar {
		border-radius: 50%;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);

		a {
			display: block;
			width: 100%;
			height: 100%;
			cursor: pointer;
		}

		&--small {
			width: 50px;
			height: 50px;
		}
		&--medium {
			width: 60px;
			height: 60px;
		}
		&--large {
			width: 75px;
			height: 75px;
		}
	}
}

.divider {
	display: block;
	height: 1px;
	background-color: var(--border-medium);
	margin: 0.5rem 0;
}

.card-content {
	margin: auto;
	overflow-y: auto;
	scrollbar-width: thin;
	scrollbar-color: var(--border-medium) transparent;
	height: calc(100% - 4.5rem);
}
</style>
