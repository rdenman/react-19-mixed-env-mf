
    export type RemoteKeys = 'remote/component';
    type PackageType<T> = T extends 'remote/component' ? typeof import('remote/component') :any;