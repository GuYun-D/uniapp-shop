import config from "./config.js"

export default function GyRequest(url, data = {}, method = "GET", cb) {
	return new Promise((resolve, reject) => [
		uni.request({
			url: config.host + url,
			data,
			method,
			success: (res) => {
				resolve(res.data)
			},
			fail: (error) => {
				reject(error)
			},

			complete: () => {
				cb && typeof cb === "function" && cb()
			}

		})
	])
}
