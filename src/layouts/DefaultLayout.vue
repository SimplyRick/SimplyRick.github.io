<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Home, User, MessageText, Menu, Linkedin, Github } from '@iconoir/vue'
import RLogo from '@/components/RLogo.vue'

const routes = [
	{ icon: Home, name: 'Home', path: '/' },
	{ icon: User, name: 'About', path: '/about' },
	{ icon: MessageText, name: 'Contact', path: '/contact' }
]

const socials = [
	{
		icon: Github,
		name: 'GitHub',
		path: 'https://github.com/SimplyRick'
	},
	{
		icon: Linkedin,
		name: 'LinkedIn',
		path: 'https://www.linkedin.com/in/ptomczak-1106'
	}
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
	<div class="layout">
		<header class="layout__header">
			<nav class="layout__header-nav">
				<!-- Navbar Header -->
				<div class="layout__header-nav-header">
					<RLogo type="logoFull" />
					<button
						class="layout__header-nav-burger"
						aria-label="Toggle menu"
						@click="toggleMenu">
						<Menu :stroke-width="2" />
					</button>
				</div>

				<!-- Desktop Menu -->
				<ul class="layout__header-nav-menu">
					<li
						v-for="route in routes"
						:key="route.path"
						class="layout__header-nav-menu-item">
						<RouterLink
							:to="route.path"
							class="layout__header-nav-menu-link">
							<component :is="route.icon" />{{ route.name }}
						</RouterLink>
					</li>
				</ul>

				<!-- Mobile Menu -->
				<div
					v-if="isMenuOpen"
					class="layout__header-nav-mobile">
					<ul class="layout__header-nav-mobile-list">
						<li
							v-for="route in routes"
							:key="route.path"
							class="layout__header-nav-mobile-item">
							<RouterLink
								:to="route.path"
								class="layout__header-nav-mobile-link"
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
			<div class="layout__footer-wrapper">
				<div class="layout__footer-copyright">
					<span> &copy; 2025 SimplyRick </span>
				</div>
				<div>
					<RLogo type="logoIcon" />
				</div>
				<div class="layout__footer-social">
					<ul class="layout__footer-social-list">
						<li
							v-for="social in socials"
							:key="social.name"
							class="layout__footer-social-item">
							<a
								:href="social.path"
								class="layout__footer-social-link"
								target="_blank"
								rel="noopener noreferrer"
								:tooltip="`${social.name}`">
								<component :is="social.icon" />
							</a>
						</li>
					</ul>
				</div>
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

		&-wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 1rem;
			border-top: 1px solid var(--border-medium);
			width: 57%;
		}

		&-copyright {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding-top: 1rem;
			padding-bottom: 1rem;
			width: calc(100% / 3);
		}

		&-social {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			padding-top: 1rem;
			padding-bottom: 1rem;
			width: calc(100% / 3);

			&-list {
				display: flex;
				gap: 1rem;
				list-style: none;
				padding: 0;
				margin: 0;
			}

			&-link {
				color: var(--text-primary);

				&:hover {
					color: var(--color-primary);
				}
			}
		}
	}
}

.layout__header-nav {
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

	&-header {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	&-burger {
		display: none;
	}

	&-menu {
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

	&-mobile {
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
@media (max-width: 1280px) {
	.layout__header-nav {
		&-menu {
			display: none;
		}

		&-header {
			justify-content: space-between;
			width: 100%;
		}

		&-burger {
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

		&-mobile {
			display: block;
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			z-index: 1000;
			background: var(--bg-base);
		}
	}

	.layout__footer {
		&-wrapper {
			flex-direction: column;
			gap: 1rem;
			text-align: center;
		}
		&-copyright {
			justify-content: center;
		}
		&-social {
			justify-content: center;
		}
	}
}
</style>
