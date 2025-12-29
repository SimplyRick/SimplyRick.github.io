<script>
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
		 * small = 33%
		 * medium = 50%
		 * large = 100% (default)
		 */
		cardSize: {
			type: String,
			default: 'large'
		}
	}
}
</script>

<template>
	<div :class="`card-component m--${cardSize}`">
		<header v-if="title">
			<div :class="`header-container--${cardSize}`">
				<h2>{{ title }}</h2>
				<subtitle v-if="subtitle">{{ subtitle }}</subtitle>
			</div>
			<a
				v-if="avatarRedirect && avatarSource"
				:href="avatarRedirect">
				<img
					:class="`avatar avatar--${cardSize}`"
					:src="avatarSource"
					alt="Avatar" />
			</a>
			<img
				v-else-if="avatarSource"
				:class="`avatar avatar--${cardSize}`"
				:src="avatarSource"
				alt="Avatar" />
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
	border: 1px solid var(--border-light);
	padding: 1rem;
	margin: 1rem 0;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
	background-color: var(--card-background);

	&.m--small {
		width: 29%;
		height: 300px;
	}
	&.m--medium {
		width: 46%;
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
	text-align: center;

	.header-container {
		display: flex;
		flex-direction: column;
		align-items: center;

		&--small {
			height: 50px;
		}
		&--medium {
			height: 60px;
		}
		&--large {
			height: 70px;
		}
	}

	.avatar {
		border-radius: 25%;

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
	margin-top: 0.5rem;
	overflow-y: auto;
	scrollbar-width: thin;
	scrollbar-color: var(--border-medium) transparent;
	height: calc(100% - 4rem);
}
</style>
