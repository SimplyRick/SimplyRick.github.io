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
	<div :class="`card card--${cardSize}`">
		<header v-if="title">
			<!-- Header part -->
			<div :class="`card__header card__header--${cardSize}`">
				<h2 class="card__header-title">{{ title }}</h2>
				<p
					v-if="subtitle"
					class="card__header-subtitle">
					{{ subtitle }}
				</p>
			</div>

			<!-- Avatar part -->
			<component
				:is="avatarRedirect ? 'a' : 'span'"
				v-if="avatarSource"
				:href="avatarRedirect">
				<img
					:class="`card__avatar card__avatar--${cardSize}`"
					:src="avatarSource"
					alt="Avatar" />
			</component>
		</header>
		<span
			v-if="title"
			class="divider" />
		<main class="card__content">
			<slot />
		</main>
	</div>
</template>

<style scoped lang="less">
.card {
	display: flex;
	flex-direction: column;
	padding: 1rem;
	margin: 1rem 0;
	box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);
	background-color: var(--card-background);

	&--small {
		width: calc(100% / 3 - 3rem);
		height: 300px;
	}
	&--medium {
		width: calc(100% / 2 - 3rem);
		height: 250px;
	}
	&--large {
		width: 100%;
		height: 200px;
	}
}

header {
	display: flex;
	justify-content: space-between;
	align-items: center;

	.card__header {
		&--small {
			height: 55px;
		}
		&--medium {
			height: 65px;
		}
		&--large {
			height: 75px;
		}

		&-title {
			margin: auto;
		}

		&-subtitle {
			margin: auto;
			font-size: 0.875rem;
			color: var(--text-secondary);
		}
	}

	.card__avatar {
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

.card__content {
	overflow-y: auto;
	scrollbar-width: thin;
	scrollbar-color: var(--border-medium) transparent;
	flex: 1;
	min-height: 0;
}

@media (max-width: 1280px) {
	.card {
		&--small,
		&--medium,
		&--large {
			width: 100%;
			height: 300px;
		}
	}

	header {
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;

		.card__header {
			&--small,
			&--medium,
			&--large {
				height: 65px;
			}
		}

		.card__avatar {
			&--small,
			&--medium,
			&--large {
				width: 60px;
				height: 60px;
			}
		}
	}
}

@media (max-width: 480px) {
	header {
		flex-direction: row;

		.card__header {
			&--small,
			&--medium,
			&--large {
				height: 55px;
			}

			&-title {
				font-size: 1.5rem;
			}

			&-subtitle {
				font-size: 0.75rem;
			}
		}

		.card__avatar {
			&--small,
			&--medium,
			&--large {
				width: 50px;
				height: 50px;
			}
		}
	}

	main {
		font-size: 0.875rem;
	}
}
</style>
