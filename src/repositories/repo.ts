// eslint:disable
/**
 * API网关项目
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import globalAxios, {AxiosPromise, AxiosInstance, AxiosStatic} from 'axios'

const URI_PREFIX = '/api'

enum MethodType {
    GET,
    POST
}

interface Api {
    URL(): string

    Params(): any

    Method(): MethodType

}

export default function ApiExec<out>(axios: AxiosStatic, api: Api): Promise<out> {
    console.log(api.Method(), api.URL())
    return new Promise<out>((resolve, reject) => {
        if (api.Method() === MethodType.POST) {
            axios.post<Response<out>>(URI_PREFIX + api.URL(), api.Params()).then(
                value => {
                    if (value.data.errno === 0) {
                        resolve(value.data.data)
                        return
                    }
                    reject(value.data.errmsg)
                    return;
                }
            ).catch(reason => {
                reject(reason)
            })
        } else {
            return axios.get<Response<out>>(URI_PREFIX + api.URL() + api.Params()).then(
                value => {
                    if (value.data.errno === 0) {
                        resolve(value.data.data)
                        return
                    }
                    reject(value.data.errmsg)
                    return;
                }
            ).catch(reason => {
                reject(reason)
            })
        }
    })

}

export class GetAvatarInput implements Api {
    username!: string


    Method(): MethodType {
        return MethodType.GET;
    }


    Params(): any {
        return '?username=' + this.username
    }

    URL(): string {
        return '/public/get/avatar';
    }

    constructor(u: string) {
        this.username = u
    }

}

export class GetAvatarOutput {
    avatar!: string
}

export class GetServiceDetailInput implements Api {
    Method(): MethodType {
        return MethodType.GET;
    }

    Params(): any {
        return '?service_id=' + this.service_id
    }

    URL(): string {
        return '/service/detail';
    }


    service_id?: number

    constructor(id?: number) {
        this.service_id = id
    }

}


export class AddGrpcServiceInput implements Api {
    Method(): MethodType {
        return MethodType.POST;
    }

    Params(): any {
        return this
    }

    URL(): string {
        return '/service/grpc/add';
    }


    load_type?: number;

    service_name?: string;

    service_desc?: string;

    open_auth?: number;

    black_list?: string;

    white_list?: string;

    white_host_name?: string;

    clientip_flow_limit?: number;

    service_flow_limit?: number;

    check_method?: number;

    check_timeout?: number;

    check_interval?: number;

    round_type?: number;

    ip_list?: string;

    weight_list?: string;

    forbid_list?: string;

    upstream_connect_timeout?: number;

    upstream_header_timeout?: number;

    upstream_idle_timeout?: number;

    upstream_max_idle?: number;

    port?: number;

    metadata_transform?: string;

    constructor() {
    }
}


export class AddHttpServiceInput implements Api {
    Method(): MethodType {
        return MethodType.POST;
    }

    Params(): any {
        return this
    }

    URL(): string {
        return "/service/http/add";
    }


    load_type?: number = 0;

    service_name!: string;

    service_desc!: string;

    rule_type?: number = 0;

    rule?: string;

    need_https?: number = 0;

    need_strip_uri?: number = 0;

    need_websocket?: number;

    url_rewrite?: string;

    header_transform?: string;

    open_auth?: number;

    black_list?: string;

    white_list?: string;

    white_host_name?: string;

    clientip_flow_limit?: number;

    service_flow_limit?: number;

    round_type?: number;

    ip_list?: string;

    weight_list?: string;

    forbid_list?: string;

    upstream_connect_timeout?: number;

    upstream_header_timeout?: number;

    upstream_idle_timeout?: number;

    upstream_max_idle?: number;

    constructor() {
    }

}


export class AddTcpServiceInput {

    Method(): MethodType {
        return MethodType.POST;
    }

    Params(): any {
        return this
    }

    URL(): string {
        return '/service/tcp/add';
    }

    load_type?: number;

    service_name?: string;

    service_desc?: string;

    open_auth?: number;

    black_list?: string;

    white_list?: string;

    white_host_name?: string;

    clientip_flow_limit?: number;

    service_flow_limit?: number;

    round_type?: number;

    ip_list?: string;

    weight_list?: string;

    forbid_list?: string;

    upstream_connect_timeout?: number;

    upstream_header_timeout?: number;

    upstream_idle_timeout?: number;

    upstream_max_idle?: number;

    port?: number;

    constructor() {
    }
}


export class AdminInfoOutput {

    id?: number;

    username?: string;

    login_time?: string;

    avatar?: string;

    introduction?: string;

    roles?: Array<string>;

    Exec(axios: AxiosStatic): AxiosPromise<Response<AdminInfoOutput>> {
        return axios.get<Response<AdminInfoOutput>>('/api/admin/admin_info')
    }
}


export class AdminLoginInput implements Api {
    Method(): MethodType {
        return MethodType.POST;
    }

    Params(): any {
        return this
    }

    URL(): string {
        return "/admin/login";
    }

    username: string = '';

    password: string = '';

    constructor() {
    }
}

export class AdminLogoutInput implements Api {
    Method(): MethodType {
        return MethodType.GET;
    }

    Params(): any {
        return ''
    }

    URL(): string {
        return "/admin/logout";
    }
}


export class AdminLoginOutput {

    token!: string;
}


export interface ChangePwdInput {

    password: string;
}

export class GetServiceListInput implements Api {
    Method(): MethodType {
        return MethodType.GET;
    }

    Params(): any {
        return '?page_no=' + this.page_no + '&page_size=' + this.page_size + '&info=' + this.info
    }

    URL(): string {
        return "/service/list";
    }

    info?: string = ''
    page_no!: number
    page_size!: number

    constructor(pn: number, ps: number, i?: string) {
        this.info = i
        this.page_no = pn
        this.page_size = ps
    }
}

export class DeleteServiceInput implements Api {
    Method(): MethodType {
        return MethodType.GET;
    }

    Params(): any {
        return '?id=' + this.id
    }

    URL(): string {
        return "/service/del";
    }


    id!: number

    constructor(id: number) {
        this.id = id
    }
}


export class ServiceListItem {

    id!: number;

    service_name?: string;

    service_desc?: string;

    load_type?: string;

    address?: string;

    qps?: number;

    qpd?: number;

    total_node?: number;
}


export class GetServiceListOutput {

    total!: number;

    list!: Array<ServiceListItem>;
}


export class Response<T> {

    errno!: number;

    errmsg!: string;

    data!: T;

    trace_id?: string;

    stack?: any;
}


export class UpdateGprcServiceInput implements Api {
    Method(): MethodType {
        return MethodType.POST;
    }

    Params(): any {
        return this
    }

    URL(): string {
        return '/service/grpc/update';
    }

    black_list?: string;

    clientip_flow_limit?: number;

    forbid_list?: string;

    metadata_transform?: string;

    ip_list?: string;

    open_auth?: number;

    port?: number;

    round_type?: number;

    service_desc?: string;

    service_flow_limit?: number;

    service_id?: number;

    service_name?: string;

    upstream_connect_timeout?: number;

    upstream_header_timeout?: number;

    upstream_idle_timeout?: number;

    upstream_max_idle?: number;

    weight_list?: string;

    white_host_name?: string;

    white_list?: string;

    constructor(props?: any) {
        if (props !== undefined) {
            this.service_id = props.service_id
            this.service_desc = props.service_desc
            this.service_name = props.service_name
            this.white_list = props.white_list
            this.white_host_name = props.white_host_name
            this.weight_list = props.weight_list
            this.upstream_max_idle = props.upstream_max_idle
            this.upstream_idle_timeout = props.upstream_idle_timeout

            this.upstream_header_timeout = props.upstream_header_timeout
            this.upstream_connect_timeout = props.upstream_connect_timeout
            this.service_flow_limit = props.service_flow_limit
            this.round_type = props.round_type
            this.open_auth = props.open_auth
            this.port = props.port
            this.metadata_transform = props.metadata_transform
            this.ip_list = props.ip_list

            this.forbid_list = props.forbid_list
            this.clientip_flow_limit = props.clientip_flow_limit
            this.black_list = props.black_list
        }


    }
}


export class UpdateHttpServiceInput implements Api {
    Method(): MethodType {
        return MethodType.POST;
    }

    Params(): any {
        return this
    }

    URL(): string {
        return "/service/http/update";
    }

    black_list?: string;

    clientip_flow_limit?: number;

    forbid_list?: string;

    header_transform?: string;

    ip_list?: string;

    need_https?: number;

    need_strip_uri?: number;

    need_websocket?: number;

    open_auth?: number;

    round_type?: number;

    rule?: string;

    rule_type?: number;

    service_desc?: string;

    service_flow_limit?: number;

    service_id?: number;

    service_name?: string;

    upstream_connect_timeout?: number;

    upstream_header_timeout?: number;

    upstream_idle_timeout?: number;

    upstream_max_idle?: number;

    url_rewrite?: string;

    weight_list?: string;

    white_host_name?: string;

    white_list?: string;

    constructor(props?: any) {
        if (props !== undefined) {
            this.service_id = props.service_id
            this.service_desc = props.service_desc
            this.service_name = props.service_name
            this.white_list = props.white_list
            this.white_host_name = props.white_host_name
            this.weight_list = props.weight_list
            this.url_rewrite = props.url_rewrite
            this.upstream_max_idle = props.upstream_max_idle
            this.upstream_idle_timeout = props.upstream_idle_timeout

            this.upstream_header_timeout = props.upstream_header_timeout
            this.upstream_connect_timeout = props.upstream_connect_timeout
            this.service_flow_limit = props.service_flow_limit
            this.rule_type = props.rule_type
            this.rule = props.rule
            this.round_type = props.round_type
            this.open_auth = props.open_auth

            this.need_websocket = props.need_websocket
            this.need_strip_uri = props.need_strip_uri
            this.need_https = props.need_https
            this.ip_list = props.ip_list

            this.header_transform = props.header_transform
            this.forbid_list = props.forbid_list
            this.clientip_flow_limit = props.clientip_flow_limit
            this.black_list = props.black_list
        }


    }

}


export class UpdateTcpServiceInput implements Api {
    Method(): MethodType {
        return MethodType.POST;
    }

    Params(): any {
        return this
    }

    URL(): string {
        return '/service/tcp/update';
    }

    black_list?: string;

    clientip_flow_limit?: number;

    forbid_list?: string;

    ip_list?: string;

    open_auth?: number;

    port?: number;

    round_type?: number;

    service_desc?: string;

    service_flow_limit?: number;

    service_id?: number;

    service_name?: string;

    upstream_connect_timeout?: number;

    upstream_header_timeout?: number;

    upstream_idle_timeout?: number;

    upstream_max_idle?: number;

    weight_list?: string;

    white_host_name?: string;

    white_list?: string;

    constructor(props?: any) {
        if (props !== undefined) {
            this.service_id = props.service_id
            this.service_desc = props.service_desc
            this.service_name = props.service_name
            this.white_list = props.white_list
            this.white_host_name = props.white_host_name
            this.weight_list = props.weight_list
            this.upstream_max_idle = props.upstream_max_idle
            this.upstream_idle_timeout = props.upstream_idle_timeout

            this.upstream_header_timeout = props.upstream_header_timeout
            this.upstream_connect_timeout = props.upstream_connect_timeout
            this.service_flow_limit = props.service_flow_limit
            this.round_type = props.round_type
            this.open_auth = props.open_auth
            this.port = props.port
            this.ip_list = props.ip_list

            this.forbid_list = props.forbid_list
            this.clientip_flow_limit = props.clientip_flow_limit
            this.black_list = props.black_list
        }


    }
}

// eslint:disable

export class GetTotalInput implements Api {
    Method(): MethodType {
        return MethodType.GET;
    }

    Params(): any {
        return ''
    }

    URL(): string {
        return "/statistics/total";
    }

}

export class GetTotalOutput {
    service_amount = 0
    qps = 0
    qpd = 0
    tenant_amount = 0
}


export class GetServiceAmountInput implements Api {
    Method(): MethodType {
        return MethodType.GET;
    }

    Params(): any {
        return ''
    }

    URL(): string {
        return "/statistics/service/amount";
    }

}

export class GetServiceAmountOutput {
    HTTP = 0
    TCP = 0
    GRPC = 0
}

export class GetServiceStatInput implements Api {
    Method(): MethodType {
        return MethodType.GET;
    }

    Params(): any {
        return '?service_id=' + this.service_id
    }

    URL(): string {
        return "/service/stat";
    }

    service_id?: number

    constructor(id?: number) {
        if (id !== undefined) {
            this.service_id = id
        }
    }

}

export class GetServiceStatOutput {
    today_list!: number[]
    yesterday_list!: number[]
}

export class AppListItem {
    id = 0
    app_id = ''
    name = ''
    secret = ''
    qpd = 0
    qps = 0
}

export class GetAppListOutput {
    total = 0
    list!: AppListItem[]
}

export class GetAppListInput implements Api {
    info ? = ''
    page_no = 0
    page_size = 0

    Method(): MethodType {
        return MethodType.GET;
    }

    Params(): any {
        return '?page_no=' + this.page_no + '&page_size=' + this.page_size + '&info=' + this.info
    }

    URL(): string {
        return "/app/list";
    }


    constructor(pn: number, ps: number, i?: string) {
        this.info = i
        this.page_no = pn
        this.page_size = ps
    }

}

export class GetAppDetailOutput {
    app_id?: string

    name?: string

    qps?: number

    qpd?: number
}

export class GetAppDetailInput implements Api {
    Method(): MethodType {
        return MethodType.GET;
    }

    Params(): any {
        return '?id=' + this.id
    }

    URL(): string {
        return "/app/detail";
    }

    id?: number

    constructor(id?: number) {
        this.id = id
    }
}

export class AddAppOutput {

}

export class AddAppInput implements Api {
    Method(): MethodType {
        return MethodType.POST;
    }

    Params(): any {
        return this
    }

    URL(): string {
        return "/app/add";
    }

    app_id?: string

    name?: string

    qps?: number

    qpd?: number
}

export class DeleteAppInput implements Api {
    Method(): MethodType {
        return MethodType.GET;
    }

    Params(): any {
        return '?id=' + this.id
    }

    URL(): string {
        return "/app/del";
    }

    id!: number

    constructor(id: number) {
        this.id = id
    }
}

export class DeleteAppOutput {

}


export class UpdateAppOutput {

}

export class UpdateAppInput implements Api {
    Method(): MethodType {
        return MethodType.POST;
    }

    Params(): any {
        return this
    }

    URL(): string {
        return "/app/update";
    }

    id ?: number

    app_id?: string

    name?: string

    qps?: number

    qpd?: number

    constructor(props?: any) {
        if (props != undefined) {
            this.id = props.id
            this.app_id = props.app_id
            this.name = props.name
            this.qps = props.qps
            this.qpd = props.qpd

        }
    }

}


export class GetTenantStatInput implements Api {
    Method(): MethodType {
        return MethodType.GET;
    }

    Params(): any {
        return '?id=' + this.id
    }

    URL(): string {
        return "/app/stat";
    }

    id?: number

    constructor(id?: number) {
        if (id !== undefined) {
            this.id = id
        }
    }

}

export class GetTenantStatOutput {
    today_list!: number[]
    yesterday_list!: number[]
}
