// package: lc.schema
// file: lc.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as lc_pb from "./lc_pb";
import * as schema_pb from "./schema_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ILcServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    set: ILcServiceService_ISet;
    get: ILcServiceService_IGet;
    verifiableSet: ILcServiceService_IVerifiableSet;
    verifiableGet: ILcServiceService_IVerifiableGet;
    getAll: ILcServiceService_IGetAll;
    execAll: ILcServiceService_IExecAll;
    scan: ILcServiceService_IScan;
    history: ILcServiceService_IHistory;
    zAdd: ILcServiceService_IZAdd;
    verifiableZAdd: ILcServiceService_IVerifiableZAdd;
    zScan: ILcServiceService_IZScan;
    currentState: ILcServiceService_ICurrentState;
    health: ILcServiceService_IHealth;
    reportTamper: ILcServiceService_IReportTamper;
    sendData: ILcServiceService_ISendData;
    verifiableGetExt: ILcServiceService_IVerifiableGetExt;
    zScanExt: ILcServiceService_IZScanExt;
    historyExt: ILcServiceService_IHistoryExt;
}

interface ILcServiceService_ISet extends grpc.MethodDefinition<schema_pb.SetRequest, schema_pb.TxMetadata> {
    path: "/lc.schema.LcService/Set";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.SetRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.SetRequest>;
    responseSerialize: grpc.serialize<schema_pb.TxMetadata>;
    responseDeserialize: grpc.deserialize<schema_pb.TxMetadata>;
}
interface ILcServiceService_IGet extends grpc.MethodDefinition<schema_pb.KeyRequest, schema_pb.Entry> {
    path: "/lc.schema.LcService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.KeyRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.KeyRequest>;
    responseSerialize: grpc.serialize<schema_pb.Entry>;
    responseDeserialize: grpc.deserialize<schema_pb.Entry>;
}
interface ILcServiceService_IVerifiableSet extends grpc.MethodDefinition<schema_pb.VerifiableSetRequest, schema_pb.VerifiableTx> {
    path: "/lc.schema.LcService/VerifiableSet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.VerifiableSetRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.VerifiableSetRequest>;
    responseSerialize: grpc.serialize<schema_pb.VerifiableTx>;
    responseDeserialize: grpc.deserialize<schema_pb.VerifiableTx>;
}
interface ILcServiceService_IVerifiableGet extends grpc.MethodDefinition<schema_pb.VerifiableGetRequest, schema_pb.VerifiableEntry> {
    path: "/lc.schema.LcService/VerifiableGet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.VerifiableGetRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.VerifiableGetRequest>;
    responseSerialize: grpc.serialize<schema_pb.VerifiableEntry>;
    responseDeserialize: grpc.deserialize<schema_pb.VerifiableEntry>;
}
interface ILcServiceService_IGetAll extends grpc.MethodDefinition<schema_pb.KeyListRequest, schema_pb.Entries> {
    path: "/lc.schema.LcService/GetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.KeyListRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.KeyListRequest>;
    responseSerialize: grpc.serialize<schema_pb.Entries>;
    responseDeserialize: grpc.deserialize<schema_pb.Entries>;
}
interface ILcServiceService_IExecAll extends grpc.MethodDefinition<schema_pb.ExecAllRequest, schema_pb.TxMetadata> {
    path: "/lc.schema.LcService/ExecAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ExecAllRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.ExecAllRequest>;
    responseSerialize: grpc.serialize<schema_pb.TxMetadata>;
    responseDeserialize: grpc.deserialize<schema_pb.TxMetadata>;
}
interface ILcServiceService_IScan extends grpc.MethodDefinition<schema_pb.ScanRequest, schema_pb.Entries> {
    path: "/lc.schema.LcService/Scan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ScanRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.ScanRequest>;
    responseSerialize: grpc.serialize<schema_pb.Entries>;
    responseDeserialize: grpc.deserialize<schema_pb.Entries>;
}
interface ILcServiceService_IHistory extends grpc.MethodDefinition<schema_pb.HistoryRequest, schema_pb.Entries> {
    path: "/lc.schema.LcService/History";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.HistoryRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.HistoryRequest>;
    responseSerialize: grpc.serialize<schema_pb.Entries>;
    responseDeserialize: grpc.deserialize<schema_pb.Entries>;
}
interface ILcServiceService_IZAdd extends grpc.MethodDefinition<schema_pb.ZAddRequest, schema_pb.TxMetadata> {
    path: "/lc.schema.LcService/ZAdd";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ZAddRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.ZAddRequest>;
    responseSerialize: grpc.serialize<schema_pb.TxMetadata>;
    responseDeserialize: grpc.deserialize<schema_pb.TxMetadata>;
}
interface ILcServiceService_IVerifiableZAdd extends grpc.MethodDefinition<schema_pb.VerifiableZAddRequest, schema_pb.VerifiableTx> {
    path: "/lc.schema.LcService/VerifiableZAdd";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.VerifiableZAddRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.VerifiableZAddRequest>;
    responseSerialize: grpc.serialize<schema_pb.VerifiableTx>;
    responseDeserialize: grpc.deserialize<schema_pb.VerifiableTx>;
}
interface ILcServiceService_IZScan extends grpc.MethodDefinition<schema_pb.ZScanRequest, schema_pb.ZEntries> {
    path: "/lc.schema.LcService/ZScan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ZScanRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.ZScanRequest>;
    responseSerialize: grpc.serialize<schema_pb.ZEntries>;
    responseDeserialize: grpc.deserialize<schema_pb.ZEntries>;
}
interface ILcServiceService_ICurrentState extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, schema_pb.ImmutableState> {
    path: "/lc.schema.LcService/CurrentState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<schema_pb.ImmutableState>;
    responseDeserialize: grpc.deserialize<schema_pb.ImmutableState>;
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
interface ILcServiceService_IVerifiableGetExt extends grpc.MethodDefinition<schema_pb.VerifiableGetRequest, lc_pb.VerifiableItemExt> {
    path: "/lc.schema.LcService/VerifiableGetExt";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.VerifiableGetRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.VerifiableGetRequest>;
    responseSerialize: grpc.serialize<lc_pb.VerifiableItemExt>;
    responseDeserialize: grpc.deserialize<lc_pb.VerifiableItemExt>;
}
interface ILcServiceService_IZScanExt extends grpc.MethodDefinition<schema_pb.ZScanRequest, lc_pb.ZItemExtList> {
    path: "/lc.schema.LcService/ZScanExt";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ZScanRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.ZScanRequest>;
    responseSerialize: grpc.serialize<lc_pb.ZItemExtList>;
    responseDeserialize: grpc.deserialize<lc_pb.ZItemExtList>;
}
interface ILcServiceService_IHistoryExt extends grpc.MethodDefinition<schema_pb.HistoryRequest, lc_pb.ItemExtList> {
    path: "/lc.schema.LcService/HistoryExt";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.HistoryRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.HistoryRequest>;
    responseSerialize: grpc.serialize<lc_pb.ItemExtList>;
    responseDeserialize: grpc.deserialize<lc_pb.ItemExtList>;
}

export const LcServiceService: ILcServiceService;

export interface ILcServiceServer {
    set: grpc.handleUnaryCall<schema_pb.SetRequest, schema_pb.TxMetadata>;
    get: grpc.handleUnaryCall<schema_pb.KeyRequest, schema_pb.Entry>;
    verifiableSet: grpc.handleUnaryCall<schema_pb.VerifiableSetRequest, schema_pb.VerifiableTx>;
    verifiableGet: grpc.handleUnaryCall<schema_pb.VerifiableGetRequest, schema_pb.VerifiableEntry>;
    getAll: grpc.handleUnaryCall<schema_pb.KeyListRequest, schema_pb.Entries>;
    execAll: grpc.handleUnaryCall<schema_pb.ExecAllRequest, schema_pb.TxMetadata>;
    scan: grpc.handleUnaryCall<schema_pb.ScanRequest, schema_pb.Entries>;
    history: grpc.handleUnaryCall<schema_pb.HistoryRequest, schema_pb.Entries>;
    zAdd: grpc.handleUnaryCall<schema_pb.ZAddRequest, schema_pb.TxMetadata>;
    verifiableZAdd: grpc.handleUnaryCall<schema_pb.VerifiableZAddRequest, schema_pb.VerifiableTx>;
    zScan: grpc.handleUnaryCall<schema_pb.ZScanRequest, schema_pb.ZEntries>;
    currentState: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, schema_pb.ImmutableState>;
    health: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, schema_pb.HealthResponse>;
    reportTamper: grpc.handleUnaryCall<lc_pb.ReportOptions, google_protobuf_empty_pb.Empty>;
    sendData: grpc.handleBidiStreamingCall<lc_pb.Data, lc_pb.Response>;
    verifiableGetExt: grpc.handleUnaryCall<schema_pb.VerifiableGetRequest, lc_pb.VerifiableItemExt>;
    zScanExt: grpc.handleUnaryCall<schema_pb.ZScanRequest, lc_pb.ZItemExtList>;
    historyExt: grpc.handleUnaryCall<schema_pb.HistoryRequest, lc_pb.ItemExtList>;
}

export interface ILcServiceClient {
    set(request: schema_pb.SetRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    set(request: schema_pb.SetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    set(request: schema_pb.SetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    get(request: schema_pb.KeyRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.Entry) => void): grpc.ClientUnaryCall;
    get(request: schema_pb.KeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Entry) => void): grpc.ClientUnaryCall;
    get(request: schema_pb.KeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Entry) => void): grpc.ClientUnaryCall;
    verifiableSet(request: schema_pb.VerifiableSetRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    verifiableSet(request: schema_pb.VerifiableSetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    verifiableSet(request: schema_pb.VerifiableSetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    verifiableGet(request: schema_pb.VerifiableGetRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableEntry) => void): grpc.ClientUnaryCall;
    verifiableGet(request: schema_pb.VerifiableGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableEntry) => void): grpc.ClientUnaryCall;
    verifiableGet(request: schema_pb.VerifiableGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableEntry) => void): grpc.ClientUnaryCall;
    getAll(request: schema_pb.KeyListRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    getAll(request: schema_pb.KeyListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    getAll(request: schema_pb.KeyListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    execAll(request: schema_pb.ExecAllRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    execAll(request: schema_pb.ExecAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    execAll(request: schema_pb.ExecAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    scan(request: schema_pb.ScanRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    scan(request: schema_pb.ScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    scan(request: schema_pb.ScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    history(request: schema_pb.HistoryRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    history(request: schema_pb.HistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    history(request: schema_pb.HistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    zAdd(request: schema_pb.ZAddRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    zAdd(request: schema_pb.ZAddRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    zAdd(request: schema_pb.ZAddRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    verifiableZAdd(request: schema_pb.VerifiableZAddRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    verifiableZAdd(request: schema_pb.VerifiableZAddRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    verifiableZAdd(request: schema_pb.VerifiableZAddRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    zScan(request: schema_pb.ZScanRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.ZEntries) => void): grpc.ClientUnaryCall;
    zScan(request: schema_pb.ZScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ZEntries) => void): grpc.ClientUnaryCall;
    zScan(request: schema_pb.ZScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ZEntries) => void): grpc.ClientUnaryCall;
    currentState(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.ImmutableState) => void): grpc.ClientUnaryCall;
    currentState(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ImmutableState) => void): grpc.ClientUnaryCall;
    currentState(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ImmutableState) => void): grpc.ClientUnaryCall;
    health(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    reportTamper(request: lc_pb.ReportOptions, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reportTamper(request: lc_pb.ReportOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reportTamper(request: lc_pb.ReportOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendData(): grpc.ClientDuplexStream<lc_pb.Data, lc_pb.Response>;
    sendData(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<lc_pb.Data, lc_pb.Response>;
    sendData(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<lc_pb.Data, lc_pb.Response>;
    verifiableGetExt(request: schema_pb.VerifiableGetRequest, callback: (error: grpc.ServiceError | null, response: lc_pb.VerifiableItemExt) => void): grpc.ClientUnaryCall;
    verifiableGetExt(request: schema_pb.VerifiableGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lc_pb.VerifiableItemExt) => void): grpc.ClientUnaryCall;
    verifiableGetExt(request: schema_pb.VerifiableGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lc_pb.VerifiableItemExt) => void): grpc.ClientUnaryCall;
    zScanExt(request: schema_pb.ZScanRequest, callback: (error: grpc.ServiceError | null, response: lc_pb.ZItemExtList) => void): grpc.ClientUnaryCall;
    zScanExt(request: schema_pb.ZScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lc_pb.ZItemExtList) => void): grpc.ClientUnaryCall;
    zScanExt(request: schema_pb.ZScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lc_pb.ZItemExtList) => void): grpc.ClientUnaryCall;
    historyExt(request: schema_pb.HistoryRequest, callback: (error: grpc.ServiceError | null, response: lc_pb.ItemExtList) => void): grpc.ClientUnaryCall;
    historyExt(request: schema_pb.HistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lc_pb.ItemExtList) => void): grpc.ClientUnaryCall;
    historyExt(request: schema_pb.HistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lc_pb.ItemExtList) => void): grpc.ClientUnaryCall;
}

export class LcServiceClient extends grpc.Client implements ILcServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public set(request: schema_pb.SetRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public set(request: schema_pb.SetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public set(request: schema_pb.SetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public get(request: schema_pb.KeyRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.Entry) => void): grpc.ClientUnaryCall;
    public get(request: schema_pb.KeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Entry) => void): grpc.ClientUnaryCall;
    public get(request: schema_pb.KeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Entry) => void): grpc.ClientUnaryCall;
    public verifiableSet(request: schema_pb.VerifiableSetRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    public verifiableSet(request: schema_pb.VerifiableSetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    public verifiableSet(request: schema_pb.VerifiableSetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    public verifiableGet(request: schema_pb.VerifiableGetRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableEntry) => void): grpc.ClientUnaryCall;
    public verifiableGet(request: schema_pb.VerifiableGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableEntry) => void): grpc.ClientUnaryCall;
    public verifiableGet(request: schema_pb.VerifiableGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableEntry) => void): grpc.ClientUnaryCall;
    public getAll(request: schema_pb.KeyListRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    public getAll(request: schema_pb.KeyListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    public getAll(request: schema_pb.KeyListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    public execAll(request: schema_pb.ExecAllRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public execAll(request: schema_pb.ExecAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public execAll(request: schema_pb.ExecAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public scan(request: schema_pb.ScanRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    public scan(request: schema_pb.ScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    public scan(request: schema_pb.ScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    public history(request: schema_pb.HistoryRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    public history(request: schema_pb.HistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    public history(request: schema_pb.HistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    public zAdd(request: schema_pb.ZAddRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public zAdd(request: schema_pb.ZAddRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public zAdd(request: schema_pb.ZAddRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public verifiableZAdd(request: schema_pb.VerifiableZAddRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    public verifiableZAdd(request: schema_pb.VerifiableZAddRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    public verifiableZAdd(request: schema_pb.VerifiableZAddRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    public zScan(request: schema_pb.ZScanRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.ZEntries) => void): grpc.ClientUnaryCall;
    public zScan(request: schema_pb.ZScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ZEntries) => void): grpc.ClientUnaryCall;
    public zScan(request: schema_pb.ZScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ZEntries) => void): grpc.ClientUnaryCall;
    public currentState(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.ImmutableState) => void): grpc.ClientUnaryCall;
    public currentState(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ImmutableState) => void): grpc.ClientUnaryCall;
    public currentState(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ImmutableState) => void): grpc.ClientUnaryCall;
    public health(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    public health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    public health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    public reportTamper(request: lc_pb.ReportOptions, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reportTamper(request: lc_pb.ReportOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reportTamper(request: lc_pb.ReportOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendData(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<lc_pb.Data, lc_pb.Response>;
    public sendData(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<lc_pb.Data, lc_pb.Response>;
    public verifiableGetExt(request: schema_pb.VerifiableGetRequest, callback: (error: grpc.ServiceError | null, response: lc_pb.VerifiableItemExt) => void): grpc.ClientUnaryCall;
    public verifiableGetExt(request: schema_pb.VerifiableGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lc_pb.VerifiableItemExt) => void): grpc.ClientUnaryCall;
    public verifiableGetExt(request: schema_pb.VerifiableGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lc_pb.VerifiableItemExt) => void): grpc.ClientUnaryCall;
    public zScanExt(request: schema_pb.ZScanRequest, callback: (error: grpc.ServiceError | null, response: lc_pb.ZItemExtList) => void): grpc.ClientUnaryCall;
    public zScanExt(request: schema_pb.ZScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lc_pb.ZItemExtList) => void): grpc.ClientUnaryCall;
    public zScanExt(request: schema_pb.ZScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lc_pb.ZItemExtList) => void): grpc.ClientUnaryCall;
    public historyExt(request: schema_pb.HistoryRequest, callback: (error: grpc.ServiceError | null, response: lc_pb.ItemExtList) => void): grpc.ClientUnaryCall;
    public historyExt(request: schema_pb.HistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lc_pb.ItemExtList) => void): grpc.ClientUnaryCall;
    public historyExt(request: schema_pb.HistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lc_pb.ItemExtList) => void): grpc.ClientUnaryCall;
}
