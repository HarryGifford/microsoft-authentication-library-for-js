/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * Response returned after processing the code response query string or fragment.
 */
export type AuthorizationCodeResponse = {
    code: string,
    cloud_instance_name?: string;
    cloud_instance_host_name?: string;
    cloud_graph_host_name?: string;
    msgraph_host?: string;
};
