// package: lc.schema
// file: lc.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as lc_pb from "./lc_pb";
import * as schema_pb from "./schema_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ILcServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    set: ILcServiceService_ISet;
    get: ILcServiceService_IGet;
    safeSet: ILcServiceService_ISafeSet;
    safeGet: ILcServiceService_ISafeGet;
    setBatch: ILcServiceService_ISetBatch;
    getBatch: ILcServiceService_IGetBatch;
    scan: ILcServiceService_IScan;
    history: ILcServiceService_IHistory;
    zAdd: ILcServiceService_IZAdd;
    safeZAdd: ILcServiceService_ISafeZAdd;
    zScan: ILcServiceService_IZScan;
    currentRoot: ILcServiceService_ICurrentRoot;
    health: ILcServiceService_IHealth;
    reportTamper: ILcServiceService_IReportTamper;
    sendData: ILcServiceService_ISendData;
}

interface ILcServiceService_ISet extends grpc.MethodDefinition<schema_pb.KeyValue, schema_pb.Index> {
    path: "/lc.schema.LcService/Set";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.KeyValue>;
    requestDeserialize: grpc.deserialize<schema_pb.KeyValue>;
    responseSerialize: grpc.serialize<schema_pb.Index>;
    responseDeserialize: grpc.deserialize<schema_pb.Index>;
}
interface ILcServiceService_IGet extends grpc.MethodDefinition<schema_pb.Key, schema_pb.Item> {
    path: "/lc.schema.LcService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.Key>;
    requestDeserialize: grpc.deserialize<schema_pb.Key>;
    responseSerialize: grpc.serialize<schema_pb.Item>;
    responseDeserialize: grpc.deserialize<schema_pb.Item>;
}
interface ILcServiceService_ISafeSet extends grpc.MethodDefinition<schema_pb.SafeSetOptions, schema_pb.Proof> {
    path: "/lc.schema.LcService/SafeSet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.SafeSetOptions>;
    requestDeserialize: grpc.deserialize<schema_pb.SafeSetOptions>;
    responseSerialize: grpc.serialize<schema_pb.Proof>;
    responseDeserialize: grpc.deserialize<schema_pb.Proof>;
}
interface ILcServiceService_ISafeGet extends grpc.MethodDefinition<schema_pb.SafeGetOptions, schema_pb.SafeItem> {
    path: "/lc.schema.LcService/SafeGet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.SafeGetOptions>;
    requestDeserialize: grpc.deserialize<schema_pb.SafeGetOptions>;
    responseSerialize: grpc.serialize<schema_pb.SafeItem>;
    responseDeserialize: grpc.deserialize<schema_pb.SafeItem>;
}
interface ILcServiceService_ISetBatch extends grpc.MethodDefinition<schema_pb.KVList, schema_pb.Index> {
    path: "/lc.schema.LcService/SetBatch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.KVList>;
    requestDeserialize: grpc.deserialize<schema_pb.KVList>;
    responseSerialize: grpc.serialize<schema_pb.Index>;
    responseDeserialize: grpc.deserialize<schema_pb.Index>;
}
interface ILcServiceService_IGetBatch extends grpc.MethodDefinition<schema_pb.KeyList, schema_pb.ItemList> {
    path: "/lc.schema.LcService/GetBatch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.KeyList>;
    requestDeserialize: grpc.deserialize<schema_pb.KeyList>;
    responseSerialize: grpc.serialize<schema_pb.ItemList>;
    responseDeserialize: grpc.deserialize<schema_pb.ItemList>;
}
interface ILcServiceService_IScan extends grpc.MethodDefinition<schema_pb.ScanOptions, schema_pb.ItemList> {
    path: "/lc.schema.LcService/Scan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ScanOptions>;
    requestDeserialize: grpc.deserialize<schema_pb.ScanOptions>;
    responseSerialize: grpc.serialize<schema_pb.ItemList>;
    responseDeserialize: grpc.deserialize<schema_pb.ItemList>;
}
interface ILcServiceService_IHistory extends grpc.MethodDefinition<schema_pb.Key, schema_pb.ItemList> {
    path: "/lc.schema.LcService/History";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.Key>;
    requestDeserialize: grpc.deserialize<schema_pb.Key>;
    responseSerialize: grpc.serialize<schema_pb.ItemList>;
    responseDeserialize: grpc.deserialize<schema_pb.ItemList>;
}
interface ILcServiceService_IZAdd extends grpc.MethodDefinition<schema_pb.ZAddOptions, schema_pb.Index> {
    path: "/lc.schema.LcService/ZAdd";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ZAddOptions>;
    requestDeserialize: grpc.deserialize<schema_pb.ZAddOptions>;
    responseSerialize: grpc.serialize<schema_pb.Index>;
    responseDeserialize: grpc.deserialize<schema_pb.Index>;
}
interface ILcServiceService_ISafeZAdd extends grpc.MethodDefinition<schema_pb.SafeZAddOptions, schema_pb.Proof> {
    path: "/lc.schema.LcService/SafeZAdd";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.SafeZAddOptions>;
    requestDeserialize: grpc.deserialize<schema_pb.SafeZAddOptions>;
    responseSerialize: grpc.serialize<schema_pb.Proof>;
    responseDeserialize: grpc.deserialize<schema_pb.Proof>;
}
interface ILcServiceService_IZScan extends grpc.MethodDefinition<schema_pb.ZScanOptions, schema_pb.ItemList> {
    path: "/lc.schema.LcService/ZScan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ZScanOptions>;
    requestDeserialize: grpc.deserialize<schema_pb.ZScanOptions>;
    responseSerialize: grpc.serialize<schema_pb.ItemList>;
    responseDeserialize: grpc.deserialize<schema_pb.ItemList>;
}
interface ILcServiceService_ICurrentRoot extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, schema_pb.Root> {
    path: "/lc.schema.LcService/CurrentRoot";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<schema_pb.Root>;
    responseDeserialize: grpc.deserialize<schema_pb.Root>;
}
interface ILcServiceService_IHealth extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, schema_pb.HealthResponse> {
    path: "/lc.schema.LcService/Health";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<schema_pb.HealthResponse>;
    responseDeserialize: grpc.deserialize<schema_pb.HealthResponse>;
}
interface ILcServiceService_IReportTamper extends grpc.MethodDefinition<lc_pb.ReportOptions, google_protobuf_empty_pb.Empty> {
    path: "/lc.schema.LcService/ReportTamper";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<lc_pb.ReportOptions>;
    requestDeserialize: grpc.deserialize<lc_pb.ReportOptions>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ILcServiceService_ISendData extends grpc.MethodDefinition<lc_pb.Data, lc_pb.Response> {
    path: "/lc.schema.LcService/SendData";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<lc_pb.Data>;
    requestDeserialize: grpc.deserialize<lc_pb.Data>;
    responseSerialize: grpc.serialize<lc_pb.Response>;
    responseDeserialize: grpc.deserialize<lc_pb.Response>;
}

export const LcServiceService: ILcServiceService;

export interface ILcServiceServer {
    set: grpc.handleUnaryCall<schema_pb.KeyValue, schema_pb.Index>;
    get: grpc.handleUnaryCall<schema_pb.Key, schema_pb.Item>;
    safeSet: grpc.handleUnaryCall<schema_pb.SafeSetOptions, schema_pb.Proof>;
    safeGet: grpc.handleUnaryCall<schema_pb.SafeGetOptions, schema_pb.SafeItem>;
    setBatch: grpc.handleUnaryCall<schema_pb.KVList, schema_pb.Index>;
    getBatch: grpc.handleUnaryCall<schema_pb.KeyList, schema_pb.ItemList>;
    scan: grpc.handleUnaryCall<schema_pb.ScanOptions, schema_pb.ItemList>;
    history: grpc.handleUnaryCall<schema_pb.Key, schema_pb.ItemList>;
    zAdd: grpc.handleUnaryCall<schema_pb.ZAddOptions, schema_pb.Index>;
    safeZAdd: grpc.handleUnaryCall<schema_pb.SafeZAddOptions, schema_pb.Proof>;
    zScan: grpc.handleUnaryCall<schema_pb.ZScanOptions, schema_pb.ItemList>;
    currentRoot: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, schema_pb.Root>;
    health: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, schema_pb.HealthResponse>;
    reportTamper: grpc.handleUnaryCall<lc_pb.ReportOptions, google_protobuf_empty_pb.Empty>;
    sendData: grpc.handleBidiStreamingCall<lc_pb.Data, lc_pb.Response>;
}

export interface ILcServiceClient {
    set(request: schema_pb.KeyValue, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    set(request: schema_pb.KeyValue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    set(request: schema_pb.KeyValue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    get(request: schema_pb.Key, callback: (error: grpc.ServiceError | null, response: schema_pb.Item) => void): grpc.ClientUnaryCall;
    get(request: schema_pb.Key, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Item) => void): grpc.ClientUnaryCall;
    get(request: schema_pb.Key, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Item) => void): grpc.ClientUnaryCall;
    safeSet(request: schema_pb.SafeSetOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    safeSet(request: schema_pb.SafeSetOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    safeSet(request: schema_pb.SafeSetOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    safeGet(request: schema_pb.SafeGetOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.SafeItem) => void): grpc.ClientUnaryCall;
    safeGet(request: schema_pb.SafeGetOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.SafeItem) => void): grpc.ClientUnaryCall;
    safeGet(request: schema_pb.SafeGetOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.SafeItem) => void): grpc.ClientUnaryCall;
    setBatch(request: schema_pb.KVList, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    setBatch(request: schema_pb.KVList, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    setBatch(request: schema_pb.KVList, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    getBatch(request: schema_pb.KeyList, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    getBatch(request: schema_pb.KeyList, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    getBatch(request: schema_pb.KeyList, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    scan(request: schema_pb.ScanOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    scan(request: schema_pb.ScanOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    scan(request: schema_pb.ScanOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    history(request: schema_pb.Key, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    history(request: schema_pb.Key, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    history(request: schema_pb.Key, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    zAdd(request: schema_pb.ZAddOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    zAdd(request: schema_pb.ZAddOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    zAdd(request: schema_pb.ZAddOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    safeZAdd(request: schema_pb.SafeZAddOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    safeZAdd(request: schema_pb.SafeZAddOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    safeZAdd(request: schema_pb.SafeZAddOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    zScan(request: schema_pb.ZScanOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    zScan(request: schema_pb.ZScanOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    zScan(request: schema_pb.ZScanOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    currentRoot(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.Root) => void): grpc.ClientUnaryCall;
    currentRoot(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Root) => void): grpc.ClientUnaryCall;
    currentRoot(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Root) => void): grpc.ClientUnaryCall;
    health(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    reportTamper(request: lc_pb.ReportOptions, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reportTamper(request: lc_pb.ReportOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reportTamper(request: lc_pb.ReportOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendData(): grpc.ClientDuplexStream<lc_pb.Data, lc_pb.Response>;
    sendData(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<lc_pb.Data, lc_pb.Response>;
    sendData(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<lc_pb.Data, lc_pb.Response>;
}

export class LcServiceClient extends grpc.Client implements ILcServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public set(request: schema_pb.KeyValue, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public set(request: schema_pb.KeyValue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public set(request: schema_pb.KeyValue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public get(request: schema_pb.Key, callback: (error: grpc.ServiceError | null, response: schema_pb.Item) => void): grpc.ClientUnaryCall;
    public get(request: schema_pb.Key, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Item) => void): grpc.ClientUnaryCall;
    public get(request: schema_pb.Key, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Item) => void): grpc.ClientUnaryCall;
    public safeSet(request: schema_pb.SafeSetOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    public safeSet(request: schema_pb.SafeSetOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    public safeSet(request: schema_pb.SafeSetOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    public safeGet(request: schema_pb.SafeGetOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.SafeItem) => void): grpc.ClientUnaryCall;
    public safeGet(request: schema_pb.SafeGetOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.SafeItem) => void): grpc.ClientUnaryCall;
    public safeGet(request: schema_pb.SafeGetOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.SafeItem) => void): grpc.ClientUnaryCall;
    public setBatch(request: schema_pb.KVList, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public setBatch(request: schema_pb.KVList, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public setBatch(request: schema_pb.KVList, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public getBatch(request: schema_pb.KeyList, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public getBatch(request: schema_pb.KeyList, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public getBatch(request: schema_pb.KeyList, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public scan(request: schema_pb.ScanOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public scan(request: schema_pb.ScanOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public scan(request: schema_pb.ScanOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public history(request: schema_pb.Key, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public history(request: schema_pb.Key, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public history(request: schema_pb.Key, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public zAdd(request: schema_pb.ZAddOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public zAdd(request: schema_pb.ZAddOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public zAdd(request: schema_pb.ZAddOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public safeZAdd(request: schema_pb.SafeZAddOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    public safeZAdd(request: schema_pb.SafeZAddOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    public safeZAdd(request: schema_pb.SafeZAddOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    public zScan(request: schema_pb.ZScanOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public zScan(request: schema_pb.ZScanOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public zScan(request: schema_pb.ZScanOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public currentRoot(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.Root) => void): grpc.ClientUnaryCall;
    public currentRoot(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Root) => void): grpc.ClientUnaryCall;
    public currentRoot(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Root) => void): grpc.ClientUnaryCall;
    public health(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    public health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    public health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    public reportTamper(request: lc_pb.ReportOptions, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reportTamper(request: lc_pb.ReportOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reportTamper(request: lc_pb.ReportOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendData(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<lc_pb.Data, lc_pb.Response>;
    public sendData(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<lc_pb.Data, lc_pb.Response>;
}
