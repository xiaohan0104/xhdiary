import axios from 'axios'
export function request(config){
    // 创建默认axios
    const instance = axios.create({
        baseURL:'',
        timeout: 5000,
    });
    // 拦截axios请求 config是请求信息
    instance.interceptors.request.use(
        // 请求成功
        config =>{
        return config
        },
        // 请求失败
        err => {
            return err
        }

    );
    instance.interceptors.response.use(
        res =>{
            return res.data
        },
        err =>{
            return err
        }
    )
    // 返回请求
    return instance(config);
}
// export function request(config){
//     return new Promise((resolve,reject) =>{
//         constinstance = axios.create({
//             baseURL:'',
//             timeout: 5000
//         })
//         instance(config)
//         .then(res =>{
//             resolve(res)
//         })
//         .catce(err =>{
//             reject(err)
//         })
//     })

// }