<script setup>
import { ref } from "vue";
import KnownFor from "./KnownFor.vue";

let cast = ref({
	profile:
		"https://imgs.search.brave.com/JbobneMbweBOfjhSf9L7w-GRPz7Jk3nf1ymTpsHhjnk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JiL2Vm/Lzk4L2JiZWY5OGE2/MTE2YTYzNmMwNDUx/NGM2NWE2ZmQ0YTMw/LS1iYWNrZ3JvdW5k/LWlwaG9uZS13YWxs/cGFwZXJzLXdhbGxw/YXBlci1pcGhvbmUt/LmpwZw",
});
</script>
<template>
	<div>
		<div class="mx-3 md:mx-auto md:container">
			<div class="cast-profile-wrapper">
				<div class="md:w-[50%]">
					<div class="cast-profile">
						<img :src="cast.profile" alt="" />
					</div>
				</div>
				<div class="md:w-[50%]">
					<div class="flex flex-col space-y-6">
						<div>
							<h1 class="text-3xl font-medium">Cast name</h1>
							<h5 class="text-base text-gray-500 mt-2 md:mt-0">
								<span class="text-gray-200 pr-2">
									<i class="fa-solid fa-cake-candles"></i>
								</span>
								<span> Birth Date </span>
							</h5>
						</div>
						<div>
							<p class="text-gray-400 font-medium">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Consectetur praesentium
								numquam quo nam quas, atque iste dolore nostrum
								cupiditate amet perspiciatis tempora rerum quae.
								Expedita possimus pariatur non. Nisi non quod
								dolor numquam nihil iure itaque dignissimos
								eligendi maiores ipsam impedit vitae amet natus
								necessitatibus ullam ut, dolorum sint veniam
								laborum. Numquam commodi fuga nisi pariatur
								deleniti nam nulla tempora eius quaerat facilis
								debitis itaque, nostrum doloribus impedit
								laborum. Nostrum similique nihil unde? Maxime,
								at excepturi voluptatum consequuntur ab fugit
								voluptatem? Quibusdam aspernatur amet nemo vel
								cum qui voluptatem et, nesciunt nisi recusandae
								quos dolores ex eaque. Saepe veniam ipsa
								distinctio unde vero, rerum, suscipit at culpa
								doloremque ratione numquam excepturi magnam eius
								laboriosam dolor quas ab eaque, totam maiores
								aliquam a deleniti blanditiis error eligendi.
								Excepturi, ipsa eum doloremque soluta quod harum
								minus est repudiandae ipsum, pariatur quam
								veritatis repellat minima quae distinctio iusto
								ratione ullam. Consectetur facilis deserunt
								omnis dicta laboriosam adipisci, nesciunt
								pariatur similique neque magnam ex aspernatur
								expedita officia laborum commodi a qui possimus!
								Aliquid excepturi reiciendis harum deserunt,
								temporibus molestias voluptatum nam earum cum,
								dolores dolor minima? Eligendi, qui est nesciunt
								possimus fugit beatae provident commodi quaerat
								nam, labore non. Tenetur cupiditate reiciendis
								debitis provident!
							</p>
						</div>
					</div>
				</div>
			</div>
			<KnownFor />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.cast-profile-wrapper {
	@apply flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 border-b border-gray-800 pb-12;
	.cast-profile {
		@apply mx-auto w-60 rounded-md overflow-hidden;
	}
}
</style>
