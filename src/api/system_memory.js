import request from '@/utils/request'
import api from '@/config-api'
export function system_memory() {
    return request({
        url: api.system_memory,
        method: 'get',
    })
}