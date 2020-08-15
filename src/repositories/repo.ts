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

export class GetServiceDetailInput {
    service_id?: number

    constructor(id?: number) {
        this.service_id = id
    }

    Exec(axios: AxiosStatic): AxiosPromise<Response<any>> {
        const param = '?service_id=' + this.service_id
        return axios.get<Response<any>>('/api/service/detail')
    }
}

/**
 *
 * @export
 * @interface AddGrpcServiceInput
 */
export class AddGrpcServiceInput {
    /**
     * 服务类型
     * @type {number}
     * @memberof AddGrpcServiceInput
     */
    load_type?: number;
    /**
     * 服务名称
     * @type {string}
     * @memberof AddGrpcServiceInput
     */
    service_name?: string;
    /**
     * 服务描述
     * @type {string}
     * @memberof AddGrpcServiceInput
     */
    service_desc?: string;
    /**
     * 开放授权
     * @type {number}
     * @memberof AddGrpcServiceInput
     */
    open_auth?: number;
    /**
     * 黑名单
     * @type {string}
     * @memberof AddGrpcServiceInput
     */
    black_list?: string;
    /**
     * 白名单
     * @type {string}
     * @memberof AddGrpcServiceInput
     */
    white_list?: string;
    /**
     * 白名单
     * @type {string}
     * @memberof AddGrpcServiceInput
     */
    white_host_name?: string;
    /**
     * 客户端限流
     * @type {number}
     * @memberof AddGrpcServiceInput
     */
    clientip_flow_limit?: number;
    /**
     * 服务限流
     * @type {number}
     * @memberof AddGrpcServiceInput
     */
    service_flow_limit?: number;
    /**
     * 检查方法
     * @type {number}
     * @memberof AddGrpcServiceInput
     */
    check_method?: number;
    /**
     * 超时
     * @type {number}
     * @memberof AddGrpcServiceInput
     */
    check_timeout?: number;
    /**
     * 间隔
     * @type {number}
     * @memberof AddGrpcServiceInput
     */
    check_interval?: number;
    /**
     * 轮询方式
     * @type {number}
     * @memberof AddGrpcServiceInput
     */
    round_type?: number;
    /**
     * ip列表
     * @type {string}
     * @memberof AddGrpcServiceInput
     */
    ip_list?: string;
    /**
     * 权重列表
     * @type {string}
     * @memberof AddGrpcServiceInput
     */
    weight_list?: string;
    /**
     * 禁止列表
     * @type {string}
     * @memberof AddGrpcServiceInput
     */
    forbid_list?: string;
    /**
     * 连接超时
     * @type {number}
     * @memberof AddGrpcServiceInput
     */
    upstream_connect_timeout?: number;
    /**
     *
     * @type {number}
     * @memberof AddGrpcServiceInput
     */
    upstream_header_timeout?: number;
    /**
     *
     * @type {number}
     * @memberof AddGrpcServiceInput
     */
    upstream_idle_timeout?: number;
    /**
     *
     * @type {number}
     * @memberof AddGrpcServiceInput
     */
    upstream_max_idle?: number;
    /**
     *
     * @type {number}
     * @memberof AddGrpcServiceInput
     */
    port?: number;
    /**
     *
     * @type {string}
     * @memberof AddGrpcServiceInput
     */
    header_transfor?: string;

    constructor() {
    }
}

/**
 *
 * @export
 * @interface AddHttpServiceInput
 */
export class AddHttpServiceInput {
    /**
     * 服务类型
     * @type {number}
     * @memberof AddHttpServiceInput
     */
    load_type?: number = 0;
    /**
     * 服务名称
     * @type {string}
     * @memberof AddHttpServiceInput
     */
    service_name!: string;
    /**
     * 服务描述
     * @type {string}
     * @memberof AddHttpServiceInput
     */
    service_desc!: string;
    /**
     * 规则类型
     * @type {number}
     * @memberof AddHttpServiceInput
     */
    rule_type?: number = 0;
    /**
     * 规则
     * @type {string}
     * @memberof AddHttpServiceInput
     */
    rule?: string;
    /**
     * 是否支持https
     * @type {number}
     * @memberof AddHttpServiceInput
     */
    need_https?: number = 0;
    /**
     *
     * @type {number}
     * @memberof AddHttpServiceInput
     */
    need_strip_uri?: number = 0;
    /**
     *
     * @type {number}
     * @memberof AddHttpServiceInput
     */
    need_websocket?: number;
    /**
     * url重写
     * @type {string}
     * @memberof AddHttpServiceInput
     */
    url_rewrite?: string;
    /**
     * header转换
     * @type {string}
     * @memberof AddHttpServiceInput
     */
    header_transfor?: string;
    /**
     * 开放授权
     * @type {number}
     * @memberof AddHttpServiceInput
     */
    open_auth?: number;
    /**
     * 黑名单
     * @type {string}
     * @memberof AddHttpServiceInput
     */
    black_list?: string;
    /**
     * 白名单
     * @type {string}
     * @memberof AddHttpServiceInput
     */
    white_list?: string;
    /**
     * 白名单
     * @type {string}
     * @memberof AddHttpServiceInput
     */
    white_host_name?: string;
    /**
     * 客户端限流
     * @type {number}
     * @memberof AddHttpServiceInput
     */
    clientip_flow_limit?: number;
    /**
     * 服务限流
     * @type {number}
     * @memberof AddHttpServiceInput
     */
    service_flow_limit?: number;
    /**
     * 检查方法
     * @type {number}
     * @memberof AddHttpServiceInput
     */
    check_method?: number;
    /**
     * 超时
     * @type {number}
     * @memberof AddHttpServiceInput
     */
    check_timeout?: number;
    /**
     * 间隔
     * @type {number}
     * @memberof AddHttpServiceInput
     */
    check_interval?: number;
    /**
     * 轮询方式
     * @type {number}
     * @memberof AddHttpServiceInput
     */
    round_type?: number;
    /**
     * ip列表
     * @type {string}
     * @memberof AddHttpServiceInput
     */
    ip_list?: string;
    /**
     * 权重列表
     * @type {string}
     * @memberof AddHttpServiceInput
     */
    weight_list?: string;
    /**
     * 禁止列表
     * @type {string}
     * @memberof AddHttpServiceInput
     */
    forbid_list?: string;
    /**
     * 连接超时
     * @type {number}
     * @memberof AddHttpServiceInput
     */
    upstream_connect_timeout?: number;
    /**
     *
     * @type {number}
     * @memberof AddHttpServiceInput
     */
    upstream_header_timeout?: number;
    /**
     *
     * @type {number}
     * @memberof AddHttpServiceInput
     */
    upstream_idle_timeout?: number;
    /**
     *
     * @type {number}
     * @memberof AddHttpServiceInput
     */
    upstream_max_idle?: number;

    Exec(axios: AxiosStatic): AxiosPromise<Response<any>> {
        return axios.get<Response<any>>('/api/admin/logout')
    }

    constructor() {
    }

}

/**
 *
 * @export
 * @interface AddTcpServiceInput
 */
export class AddTcpServiceInput {
    /**
     * 服务类型
     * @type {number}
     * @memberof AddTcpServiceInput
     */
    load_type?: number;
    /**
     * 服务名称
     * @type {string}
     * @memberof AddTcpServiceInput
     */
    service_name?: string;
    /**
     * 服务描述
     * @type {string}
     * @memberof AddTcpServiceInput
     */
    service_desc?: string;
    /**
     * 开放授权
     * @type {number}
     * @memberof AddTcpServiceInput
     */
    open_auth?: number;
    /**
     * 黑名单
     * @type {string}
     * @memberof AddTcpServiceInput
     */
    black_list?: string;
    /**
     * 白名单
     * @type {string}
     * @memberof AddTcpServiceInput
     */
    white_list?: string;
    /**
     * 白名单
     * @type {string}
     * @memberof AddTcpServiceInput
     */
    white_host_name?: string;
    /**
     * 客户端限流
     * @type {number}
     * @memberof AddTcpServiceInput
     */
    clientip_flow_limit?: number;
    /**
     * 服务限流
     * @type {number}
     * @memberof AddTcpServiceInput
     */
    service_flow_limit?: number;
    /**
     * 检查方法
     * @type {number}
     * @memberof AddTcpServiceInput
     */
    check_method?: number;
    /**
     * 超时
     * @type {number}
     * @memberof AddTcpServiceInput
     */
    check_timeout?: number;
    /**
     * 间隔
     * @type {number}
     * @memberof AddTcpServiceInput
     */
    check_interval?: number;
    /**
     * 轮询方式
     * @type {number}
     * @memberof AddTcpServiceInput
     */
    round_type?: number;
    /**
     * ip列表
     * @type {string}
     * @memberof AddTcpServiceInput
     */
    ip_list?: string;
    /**
     * 权重列表
     * @type {string}
     * @memberof AddTcpServiceInput
     */
    weight_list?: string;
    /**
     * 禁止列表
     * @type {string}
     * @memberof AddTcpServiceInput
     */
    forbid_list?: string;
    /**
     * 连接超时
     * @type {number}
     * @memberof AddTcpServiceInput
     */
    upstream_connect_timeout?: number;
    /**
     *
     * @type {number}
     * @memberof AddTcpServiceInput
     */
    upstream_header_timeout?: number;
    /**
     *
     * @type {number}
     * @memberof AddTcpServiceInput
     */
    upstream_idle_timeout?: number;
    /**
     *
     * @type {number}
     * @memberof AddTcpServiceInput
     */
    upstream_max_idle?: number;
    /**
     *
     * @type {number}
     * @memberof AddTcpServiceInput
     */
    port?: number;

    constructor() {
    }
}

/**
 *
 * @export
 * @interface AdminInfoOutput
 */
export class AdminInfoOutput {
    /**
     *
     * @type {number}
     * @memberof AdminInfoOutput
     */
    id?: number;
    /**
     *
     * @type {string}
     * @memberof AdminInfoOutput
     */
    username?: string;
    /**
     *
     * @type {string}
     * @memberof AdminInfoOutput
     */
    login_time?: string;
    /**
     *
     * @type {string}
     * @memberof AdminInfoOutput
     */
    avatar?: string;
    /**
     *
     * @type {string}
     * @memberof AdminInfoOutput
     */
    introduction?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof AdminInfoOutput
     */
    roles?: Array<string>;

    Exec(axios: AxiosStatic): AxiosPromise<InlineResponse2001> {
        return axios.get<InlineResponse2001>('/api/admin/admin_info')
    }
}

/**
 *
 * @export
 * @interface AdminLoginInput
 */
export class AdminLoginInput {
    /**
     * 用户名
     * @type {string}
     * @memberof AdminLoginInput
     */
    username?: string;
    /**
     * 密码
     * @type {string}
     * @memberof AdminLoginInput
     */
    password?: string;

    Exec(axios: AxiosStatic): AxiosPromise<InlineResponse2002> {
        return axios.post<InlineResponse2002>('/api/admin/login', this)
    }

    constructor(u?: string, p?: string) {
        this.username = u
        this.password = p
    }
}

export class AdminLogoutInput {
    Exec(axios: AxiosStatic): AxiosPromise<Response<any>> {
        return axios.get<Response<any>>('/api/admin/logout')
    }
}

/**
 *
 * @export
 * @interface AdminLoginOutput
 */
export interface AdminLoginOutput {
    /**
     *
     * @type {string}
     * @memberof AdminLoginOutput
     */
    token: string;
}

/**
 *
 * @export
 * @interface ChangePwdInput
 */
export interface ChangePwdInput {
    /**
     * 密码
     * @type {string}
     * @memberof ChangePwdInput
     */
    password: string;
}

/**
 *
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     *
     * @type {number}
     * @memberof InlineResponse200
     */
    errno?: number;
    /**
     *
     * @type {string}
     * @memberof InlineResponse200
     */
    errmsg?: string;
    /**
     *
     * @type {ServiceListOutput}
     * @memberof InlineResponse200
     */
    data?: ServiceListOutput;
    /**
     *
     * @type {string}
     * @memberof InlineResponse200
     */
    trace_id?: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse200
     */
    stack?: string;
}

/**
 *
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     *
     * @type {number}
     * @memberof InlineResponse2001
     */
    errno: number;
    /**
     *
     * @type {string}
     * @memberof InlineResponse2001
     */
    errmsg: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse2001
     */
    trace_id: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse2001
     */
    stack: string | null;
    /**
     *
     * @type {AdminInfoOutput}
     * @memberof InlineResponse2001
     */
    data: AdminInfoOutput;
}

/**
 *
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
    /**
     *
     * @type {number}
     * @memberof InlineResponse2002
     */
    errno: number;
    /**
     *
     * @type {string}
     * @memberof InlineResponse2002
     */
    errmsg: string;
    /**
     *
     * @type {AdminLoginOutput}
     * @memberof InlineResponse2002
     */
    data: AdminLoginOutput;
    /**
     *
     * @type {string}
     * @memberof InlineResponse2002
     */
    trace_id: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse2002
     */
    stack: string;

}

export class GetServiceListInput {
    info?: string
    page_no!: number
    page_size!: number

    Exec(axios: AxiosStatic): AxiosPromise<Response<ServiceListOutput>> {
        const param = '?page_no=' + this.page_no + '&page_size=' + this.page_size + '&info=' + this.info
        return axios.get<Response<ServiceListOutput>>('/api/service/list' + param)
    }

    constructor(pn: number, ps: number, i?: string) {
        this.info = i
        this.page_no = pn
        this.page_size = ps
    }
}

export class DeleteServiceInput {
    id!: number

    Exec(axios: AxiosStatic): AxiosPromise<Response<string>> {
        const param = '?id=' + this.id
        return axios.get<Response<string>>('/api/service/del' + param)
    }

    constructor(id: number) {
        this.id = id
    }
}

/**
 *
 * @export
 * @interface ServiceListItem
 */
export interface ServiceListItem {
    /**
     *
     * @type {number}
     * @memberof ServiceListItem
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof ServiceListItem
     */
    service_name?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceListItem
     */
    service_desc?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceListItem
     */
    load_type?: string;
    /**
     *
     * @type {string}
     * @memberof ServiceListItem
     */
    address?: string;
    /**
     *
     * @type {number}
     * @memberof ServiceListItem
     */
    qps?: number;
    /**
     *
     * @type {number}
     * @memberof ServiceListItem
     */
    qpd?: number;
    /**
     *
     * @type {number}
     * @memberof ServiceListItem
     */
    total_node?: number;
}

/**
 *
 * @export
 * @interface ServiceListOutput
 */
export interface ServiceListOutput {
    /**
     *
     * @type {number}
     * @memberof ServiceListOutput
     */
    total: number;
    /**
     *
     * @type {Array<ServiceListItem>}
     * @memberof ServiceListOutput
     */
    list: Array<ServiceListItem>;
}

/**
 *
 * @export
 * @interface TongYongXiangYing
 */
export class Response<T> {
    /**
     *
     * @type {number}
     * @memberof TongYongXiangYing
     */
    errno!: number;
    /**
     *
     * @type {string}
     * @memberof TongYongXiangYing
     */
    errmsg!: string;
    /**
     *
     * @type {any}
     * @memberof TongYongXiangYing
     */
    data!: T;
    /**
     *
     * @type {string}
     * @memberof TongYongXiangYing
     */
    trace_id?: string;
    /**
     *
     * @type {any}
     * @memberof TongYongXiangYing
     */
    stack?: any;
}

/**
 *
 * @export
 * @interface UpdateGprcServiceInput
 */
export interface UpdateGprcServiceInput {
    /**
     * 服务类型
     * @type {number}
     * @memberof UpdateGprcServiceInput
     */
    load_type?: number;
    /**
     * 服务名称
     * @type {string}
     * @memberof UpdateGprcServiceInput
     */
    service_name: string;
    /**
     * 服务描述
     * @type {string}
     * @memberof UpdateGprcServiceInput
     */
    service_desc: string;
    /**
     * 开放授权
     * @type {number}
     * @memberof UpdateGprcServiceInput
     */
    open_auth?: number;
    /**
     * 黑名单
     * @type {string}
     * @memberof UpdateGprcServiceInput
     */
    black_list?: string;
    /**
     * 白名单
     * @type {string}
     * @memberof UpdateGprcServiceInput
     */
    white_list?: string;
    /**
     * 白名单
     * @type {string}
     * @memberof UpdateGprcServiceInput
     */
    white_host_name?: string;
    /**
     * 客户端限流
     * @type {number}
     * @memberof UpdateGprcServiceInput
     */
    clientip_flow_limit?: number;
    /**
     * 服务限流
     * @type {number}
     * @memberof UpdateGprcServiceInput
     */
    service_flow_limit?: number;
    /**
     * 检查方法
     * @type {number}
     * @memberof UpdateGprcServiceInput
     */
    check_method?: number;
    /**
     * 超时
     * @type {number}
     * @memberof UpdateGprcServiceInput
     */
    check_timeout?: number;
    /**
     * 间隔
     * @type {number}
     * @memberof UpdateGprcServiceInput
     */
    check_interval?: number;
    /**
     * 轮询方式
     * @type {number}
     * @memberof UpdateGprcServiceInput
     */
    round_type?: number;
    /**
     * ip列表
     * @type {string}
     * @memberof UpdateGprcServiceInput
     */
    ip_list?: string;
    /**
     * 权重列表
     * @type {string}
     * @memberof UpdateGprcServiceInput
     */
    weight_list?: string;
    /**
     * 禁止列表
     * @type {string}
     * @memberof UpdateGprcServiceInput
     */
    forbid_list?: string;
    /**
     * 连接超时
     * @type {number}
     * @memberof UpdateGprcServiceInput
     */
    upstream_connect_timeout?: number;
    /**
     *
     * @type {number}
     * @memberof UpdateGprcServiceInput
     */
    upstream_header_timeout?: number;
    /**
     *
     * @type {number}
     * @memberof UpdateGprcServiceInput
     */
    upstream_idle_timeout?: number;
    /**
     *
     * @type {number}
     * @memberof UpdateGprcServiceInput
     */
    upstream_max_idle?: number;
    /**
     *
     * @type {number}
     * @memberof UpdateGprcServiceInput
     */
    port: number;
    /**
     *
     * @type {number}
     * @memberof UpdateGprcServiceInput
     */
    service_id: number;
    /**
     *
     * @type {string}
     * @memberof UpdateGprcServiceInput
     */
    header_transfor?: string;
}

/**
 *
 * @export
 * @interface UpdateHttpServiceInput
 */
export interface UpdateHttpServiceInput {
    /**
     * 服务类型
     * @type {number}
     * @memberof UpdateHttpServiceInput
     */
    load_type?: number;
    /**
     * 服务名称
     * @type {string}
     * @memberof UpdateHttpServiceInput
     */
    service_name: string;
    /**
     * 服务描述
     * @type {string}
     * @memberof UpdateHttpServiceInput
     */
    service_desc: string;
    /**
     * 规则类型
     * @type {number}
     * @memberof UpdateHttpServiceInput
     */
    rule_type?: number;
    /**
     * 规则
     * @type {string}
     * @memberof UpdateHttpServiceInput
     */
    rule?: string;
    /**
     * 是否支持https
     * @type {number}
     * @memberof UpdateHttpServiceInput
     */
    need_https?: number;
    /**
     *
     * @type {number}
     * @memberof UpdateHttpServiceInput
     */
    need_strip_uri?: number;
    /**
     *
     * @type {number}
     * @memberof UpdateHttpServiceInput
     */
    need_websocket?: number;
    /**
     * url重写
     * @type {string}
     * @memberof UpdateHttpServiceInput
     */
    url_rewrite?: string;
    /**
     * header转换
     * @type {string}
     * @memberof UpdateHttpServiceInput
     */
    header_transfor?: string;
    /**
     * 开放授权
     * @type {number}
     * @memberof UpdateHttpServiceInput
     */
    open_auth?: number;
    /**
     * 黑名单
     * @type {string}
     * @memberof UpdateHttpServiceInput
     */
    black_list?: string;
    /**
     * 白名单
     * @type {string}
     * @memberof UpdateHttpServiceInput
     */
    white_list?: string;
    /**
     * 白名单
     * @type {string}
     * @memberof UpdateHttpServiceInput
     */
    white_host_name?: string;
    /**
     * 客户端限流
     * @type {number}
     * @memberof UpdateHttpServiceInput
     */
    clientip_flow_limit?: number;
    /**
     * 服务限流
     * @type {number}
     * @memberof UpdateHttpServiceInput
     */
    service_flow_limit?: number;
    /**
     * 检查方法
     * @type {number}
     * @memberof UpdateHttpServiceInput
     */
    check_method?: number;
    /**
     * 超时
     * @type {number}
     * @memberof UpdateHttpServiceInput
     */
    check_timeout?: number;
    /**
     * 间隔
     * @type {number}
     * @memberof UpdateHttpServiceInput
     */
    check_interval?: number;
    /**
     * 轮询方式
     * @type {number}
     * @memberof UpdateHttpServiceInput
     */
    round_type?: number;
    /**
     * ip列表
     * @type {string}
     * @memberof UpdateHttpServiceInput
     */
    ip_list?: string;
    /**
     * 权重列表
     * @type {string}
     * @memberof UpdateHttpServiceInput
     */
    weight_list?: string;
    /**
     * 禁止列表
     * @type {string}
     * @memberof UpdateHttpServiceInput
     */
    forbid_list?: string;
    /**
     * 连接超时
     * @type {number}
     * @memberof UpdateHttpServiceInput
     */
    upstream_connect_timeout?: number;
    /**
     *
     * @type {number}
     * @memberof UpdateHttpServiceInput
     */
    upstream_header_timeout?: number;
    /**
     *
     * @type {number}
     * @memberof UpdateHttpServiceInput
     */
    upstream_idle_timeout?: number;
    /**
     *
     * @type {number}
     * @memberof UpdateHttpServiceInput
     */
    upstream_max_idle?: number;
    /**
     *
     * @type {string}
     * @memberof UpdateHttpServiceInput
     */
    service_id: string;
}

/**
 *
 * @export
 * @interface UpdateTcpServiceInput
 */
export interface UpdateTcpServiceInput {
    /**
     * 服务类型
     * @type {number}
     * @memberof UpdateTcpServiceInput
     */
    load_type?: number;
    /**
     * 服务名称
     * @type {string}
     * @memberof UpdateTcpServiceInput
     */
    service_name: string;
    /**
     * 服务描述
     * @type {string}
     * @memberof UpdateTcpServiceInput
     */
    service_desc: string;
    /**
     * 开放授权
     * @type {number}
     * @memberof UpdateTcpServiceInput
     */
    open_auth?: number;
    /**
     * 黑名单
     * @type {string}
     * @memberof UpdateTcpServiceInput
     */
    black_list?: string;
    /**
     * 白名单
     * @type {string}
     * @memberof UpdateTcpServiceInput
     */
    white_list?: string;
    /**
     * 白名单
     * @type {string}
     * @memberof UpdateTcpServiceInput
     */
    white_host_name?: string;
    /**
     * 客户端限流
     * @type {number}
     * @memberof UpdateTcpServiceInput
     */
    clientip_flow_limit?: number;
    /**
     * 服务限流
     * @type {number}
     * @memberof UpdateTcpServiceInput
     */
    service_flow_limit?: number;
    /**
     * 检查方法
     * @type {number}
     * @memberof UpdateTcpServiceInput
     */
    check_method?: number;
    /**
     * 超时
     * @type {number}
     * @memberof UpdateTcpServiceInput
     */
    check_timeout?: number;
    /**
     * 间隔
     * @type {number}
     * @memberof UpdateTcpServiceInput
     */
    check_interval?: number;
    /**
     * 轮询方式
     * @type {number}
     * @memberof UpdateTcpServiceInput
     */
    round_type?: number;
    /**
     * ip列表
     * @type {string}
     * @memberof UpdateTcpServiceInput
     */
    ip_list?: string;
    /**
     * 权重列表
     * @type {string}
     * @memberof UpdateTcpServiceInput
     */
    weight_list?: string;
    /**
     * 禁止列表
     * @type {string}
     * @memberof UpdateTcpServiceInput
     */
    forbid_list?: string;
    /**
     * 连接超时
     * @type {number}
     * @memberof UpdateTcpServiceInput
     */
    upstream_connect_timeout?: number;
    /**
     *
     * @type {number}
     * @memberof UpdateTcpServiceInput
     */
    upstream_header_timeout?: number;
    /**
     *
     * @type {number}
     * @memberof UpdateTcpServiceInput
     */
    upstream_idle_timeout?: number;
    /**
     *
     * @type {number}
     * @memberof UpdateTcpServiceInput
     */
    upstream_max_idle?: number;
    /**
     *
     * @type {number}
     * @memberof UpdateTcpServiceInput
     */
    port: number;
    /**
     *
     * @type {number}
     * @memberof UpdateTcpServiceInput
     */
    service_id: number;
}

// eslint:disable
