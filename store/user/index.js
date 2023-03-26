import { defineStore } from 'pinia';

export const useUserStore = defineStore('counter', {
	state: () => {
		return { 
			count: 0 ,
		};
	},
	actions: {
		increment() {
			this.count++;
		},
	},
});