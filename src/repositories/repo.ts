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
            axios.post<Response<out>>(api.URL(), api.Params()).then(
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
            return axios.get<Response<out>>(api.URL() + api.Params()).then(
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
        return '/api/public/get/avatar';
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
        return '/api/service/detail';
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
        return '/api/service/grpc/add';
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
        return "/api/service/http/add";
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
        return '/api/service/tcp/add';
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
        return "/api/admin/login";
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
        return "/api/admin/logout";
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
        return "/api/service/list";
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
        return "";
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
        return '/api/service/grpc/update';
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
        return "/api/service/http/update";
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
        return '/api/service/tcp/update';
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


export class GetServiceStatisticalInput implements Api{
    Method(): MethodType {
        return MethodType.GET;
    }

    Params(): any {
        return ''
    }

    URL(): string {
        return "/api/service/statistical";
    }

}

export class GetServiceStatisticalOutput {
    HTTP = 0
    TCP = 0
    GRPC = 0
}
