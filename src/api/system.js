import request from '@/utils/request'
import api from '@/config-api'
export function system() {
    return request({
        url: api.system_info,
        method: 'get',
    })
}