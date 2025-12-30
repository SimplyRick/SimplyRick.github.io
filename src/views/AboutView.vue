<script setup lang="ts">
import RCard from '@/components/RCard.vue'
import profilePicture from '@/assets/profile-picture.png'
</script>

<template>
	<div class="about">
		<RCard
			:title="'About Me'"
			:subtitle="'Frontend Developer'"
			:card-size="'small'">
			<p>
				Hello! I'm a passionate developer who loves creating beautiful and
				functional web applications.
			</p>
		</RCard>
		<RCard
			:title="'About Me'"
			:card-size="'small'"
			:avatar-source="profilePicture">
			<p>
				Hello! I'm a passionate developer who loves creating beautiful and
				functional web applications.
			</p>
		</RCard>
		<RCard
			:title="'About Me'"
			:card-size="'small'">
			<p>
				Hello! I'm a passionate developer who loves creating beautiful and
				functional web applications.
			</p>
		</RCard>
		<RCard
			:title="'About Me'"
			:subtitle="'Frontend Developer'"
			:card-size="'medium'"
			:avatar-source="profilePicture">
			<p>
				Hello! I'm a passionate developer who loves creating beautiful and
				functional web applications.
			</p>
		</RCard>
		<RCard
			:title="'About Me'"
			:card-size="'medium'">
			<p>
				Hello! I'm a passionate developer who loves creating beautiful and
				functional web applications. Hello! I'm a passionate developer who loves
				creating beautiful and functional web applications. Hello! I'm a
				passionate developer who loves creating beautiful and functional web
				applications. Hello! I'm a passionate developer who loves creating
				beautiful and functional web applications. Hello! I'm a passionate
				developer who loves creating beautiful and functional web applications.
				Hello! I'm a passionate developer who loves creating beautiful and
				functional web applications.
			</p>
		</RCard>
		<RCard
			:title="'About Me'"
			:subtitle="'Frontend Developer'"
			:card-size="'large'"
			:avatar-source="profilePicture"
			:avatar-redirect="'https://simplyrick.github.io'">
			<p>
				Hello! I'm a passionate developer who loves creating beautiful and
				functional web applications.
			</p>
		</RCard>
	</div>
</template>

<style scoped lang="less">
.about {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	.r-card {
		flex-grow: 1;
	}
}
</style>
