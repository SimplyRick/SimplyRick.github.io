<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Home, User, MessageText, Menu } from '@iconoir/vue'

const routes = [
	{ icon: Home, name: 'Home', path: '/' },
	{ icon: User, name: 'About', path: '/about' },
	{ icon: MessageText, name: 'Contact', path: '/contact' }
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
	<div class="layout">
		<header class="layout__header">
			<nav class="nav">
				<!-- Navbar Header -->
				<div class="nav__header">
					<div class="nav__logo">
						<div class="nav__logo-initials">
							<span>SR</span>
						</div>
						<span>// PORTFOLIO</span>
					</div>
					<button
						class="nav__burger"
						aria-label="Toggle menu"
						@click="toggleMenu">
						<Menu :stroke-width="2" />
					</button>
				</div>

				<!-- Desktop Menu -->
				<ul class="nav__menu">
					<li
						v-for="route in routes"
						:key="route.path"
						class="nav__menu-item">
						<RouterLink
							:to="route.path"
							class="nav__menu-link">
							<component :is="route.icon" />{{ route.name }}
						</RouterLink>
					</li>
				</ul>

				<!-- Mobile Menu -->
				<div
					v-if="isMenuOpen"
					class="nav__mobile">
					<ul class="nav__mobile-list">
						<li
							v-for="route in routes"
							:key="route.path"
							class="nav__mobile-item">
							<RouterLink
								:to="route.path"
								class="nav__mobile-link"
								@click="isMenuOpen = false">
								<component :is="route.icon" />{{ route.name }}
							</RouterLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>

		<main class="layout__main">
			<div class="layout__main-content">
				<slot />
			</div>
		</main>

		<footer class="layout__footer">
			<div class="layout__footer-content">
				<span> &copy; 2025 SimplyRick </span>
			</div>
		</footer>
	</div>
</template>

<style scoped lang="less">
.layout {
	min-height: 100vh;
	display: flex;
	flex-direction: column;

	&__header {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	&__main {
		display: flex;
		justify-content: center;
		width: 100%;
		flex-grow: 1;

		&-content {
			display: flex;
			flex-direction: column;
			padding: 1rem;
			width: 57%;
		}
	}

	&__footer {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;

		&-content {
			display: flex;
			justify-content: center;
			align-items: center;
			border-top: 1px solid var(--border-medium);
			padding-top: 1rem;
			padding-bottom: 1rem;
			width: 57%;
		}
	}
}

.nav {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	border-bottom: 1px solid var(--border-medium);
	padding-top: 1rem;
	padding-bottom: 1rem;
	width: 57%;
	position: relative;

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	&__header {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	&__logo {
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

		&-initials {
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

	&__burger {
		display: none;
	}

	&__menu {
		display: flex;
		gap: 4rem;

		&-item {
			display: flex;
			flex: 1;
			font-size: 1.125rem;
			font-weight: bold;
			transition: color 400ms;
			justify-content: center;

			&:hover {
				color: var(--color-primary);
			}
		}

		&-link {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			white-space: nowrap;
		}
	}

	&__mobile {
		display: none;

		&-list {
			display: flex;
			flex-direction: column;
			border: 1px solid var(--border-medium);
			width: 100%;
		}

		&-item {
			text-align: left;
			font-weight: bold;
			border-bottom: 1px solid var(--border-medium);

			&:last-child {
				border-bottom: none;
			}
		}

		&-link {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			padding: 1rem;
			transition: all 300ms;

			&:hover {
				background: var(--color-primary);
				color: white;
			}
		}
	}
}

/* Responsive Design */
@media (max-width: 1024px) {
	.nav {
		&__menu {
			display: none;
		}

		&__header {
			justify-content: space-between;
			width: 100%;
		}

		&__burger {
			background: transparent;
			border: none;
			cursor: pointer;
			padding: 0.5rem;
			display: flex;
			align-items: center;
			justify-content: center;
			color: inherit;

			&:hover {
				color: var(--color-primary);
			}
		}

		&__mobile {
			display: block;
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			z-index: 1000;
			background: var(--bg-base);
		}
	}
}
</style>
