<template>
	<view>
		<button @click="open">打开</button>
		<button @click="getUserInfo">获取信息</button>
		<button @click="login">登录</button>
		<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取手机号</button>
		<button @click="getStep">获取微信部署</button>
		<button @click="getLocation">获取位置</button>
		<button @click="openMap">打开地图</button>
	</view>
</template>

<script setup>
import { useUserStore } from '@/store/user/index.js'
const store = useUserStore()

</script>

<style>

</style>
