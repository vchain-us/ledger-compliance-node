// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var lc_pb = require('./lc_pb.js');
var schema_pb = require('./schema_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_HealthResponse(arg) {
  if (!(arg instanceof schema_pb.HealthResponse)) {
    throw new Error('Expected argument of type immudb.schema.HealthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_HealthResponse(buffer_arg) {
  return schema_pb.HealthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_HistoryOptions(arg) {
  if (!(arg instanceof schema_pb.HistoryOptions)) {
    throw new Error('Expected argument of type immudb.schema.HistoryOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_HistoryOptions(buffer_arg) {
  return schema_pb.HistoryOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_Index(arg) {
  if (!(arg instanceof schema_pb.Index)) {
    throw new Error('Expected argument of type immudb.schema.Index');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_Index(buffer_arg) {
  return schema_pb.Index.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_Item(arg) {
  if (!(arg instanceof schema_pb.Item)) {
    throw new Error('Expected argument of type immudb.schema.Item');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_Item(buffer_arg) {
  return schema_pb.Item.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ItemList(arg) {
  if (!(arg instanceof schema_pb.ItemList)) {
    throw new Error('Expected argument of type immudb.schema.ItemList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ItemList(buffer_arg) {
  return schema_pb.ItemList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_KVList(arg) {
  if (!(arg instanceof schema_pb.KVList)) {
    throw new Error('Expected argument of type immudb.schema.KVList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_KVList(buffer_arg) {
  return schema_pb.KVList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_Key(arg) {
  if (!(arg instanceof schema_pb.Key)) {
    throw new Error('Expected argument of type immudb.schema.Key');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_Key(buffer_arg) {
  return schema_pb.Key.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_KeyList(arg) {
  if (!(arg instanceof schema_pb.KeyList)) {
    throw new Error('Expected argument of type immudb.schema.KeyList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_KeyList(buffer_arg) {
  return schema_pb.KeyList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_KeyValue(arg) {
  if (!(arg instanceof schema_pb.KeyValue)) {
    throw new Error('Expected argument of type immudb.schema.KeyValue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_KeyValue(buffer_arg) {
  return schema_pb.KeyValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_Proof(arg) {
  if (!(arg instanceof schema_pb.Proof)) {
    throw new Error('Expected argument of type immudb.schema.Proof');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_Proof(buffer_arg) {
  return schema_pb.Proof.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_Root(arg) {
  if (!(arg instanceof schema_pb.Root)) {
    throw new Error('Expected argument of type immudb.schema.Root');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_Root(buffer_arg) {
  return schema_pb.Root.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_SafeGetOptions(arg) {
  if (!(arg instanceof schema_pb.SafeGetOptions)) {
    throw new Error('Expected argument of type immudb.schema.SafeGetOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_SafeGetOptions(buffer_arg) {
  return schema_pb.SafeGetOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_SafeItem(arg) {
  if (!(arg instanceof schema_pb.SafeItem)) {
    throw new Error('Expected argument of type immudb.schema.SafeItem');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_SafeItem(buffer_arg) {
  return schema_pb.SafeItem.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_SafeSetOptions(arg) {
  if (!(arg instanceof schema_pb.SafeSetOptions)) {
    throw new Error('Expected argument of type immudb.schema.SafeSetOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_SafeSetOptions(buffer_arg) {
  return schema_pb.SafeSetOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_SafeZAddOptions(arg) {
  if (!(arg instanceof schema_pb.SafeZAddOptions)) {
    throw new Error('Expected argument of type immudb.schema.SafeZAddOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_SafeZAddOptions(buffer_arg) {
  return schema_pb.SafeZAddOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ScanOptions(arg) {
  if (!(arg instanceof schema_pb.ScanOptions)) {
    throw new Error('Expected argument of type immudb.schema.ScanOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ScanOptions(buffer_arg) {
  return schema_pb.ScanOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ZAddOptions(arg) {
  if (!(arg instanceof schema_pb.ZAddOptions)) {
    throw new Error('Expected argument of type immudb.schema.ZAddOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ZAddOptions(buffer_arg) {
  return schema_pb.ZAddOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ZItemList(arg) {
  if (!(arg instanceof schema_pb.ZItemList)) {
    throw new Error('Expected argument of type immudb.schema.ZItemList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ZItemList(buffer_arg) {
  return schema_pb.ZItemList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ZScanOptions(arg) {
  if (!(arg instanceof schema_pb.ZScanOptions)) {
    throw new Error('Expected argument of type immudb.schema.ZScanOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ZScanOptions(buffer_arg) {
  return schema_pb.ZScanOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lc_schema_Data(arg) {
  if (!(arg instanceof lc_pb.Data)) {
    throw new Error('Expected argument of type lc.schema.Data');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lc_schema_Data(buffer_arg) {
  return lc_pb.Data.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lc_schema_ItemExtList(arg) {
  if (!(arg instanceof lc_pb.ItemExtList)) {
    throw new Error('Expected argument of type lc.schema.ItemExtList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lc_schema_ItemExtList(buffer_arg) {
  return lc_pb.ItemExtList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lc_schema_ReportOptions(arg) {
  if (!(arg instanceof lc_pb.ReportOptions)) {
    throw new Error('Expected argument of type lc.schema.ReportOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lc_schema_ReportOptions(buffer_arg) {
  return lc_pb.ReportOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lc_schema_Response(arg) {
  if (!(arg instanceof lc_pb.Response)) {
    throw new Error('Expected argument of type lc.schema.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lc_schema_Response(buffer_arg) {
  return lc_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lc_schema_SafeItemExt(arg) {
  if (!(arg instanceof lc_pb.SafeItemExt)) {
    throw new Error('Expected argument of type lc.schema.SafeItemExt');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lc_schema_SafeItemExt(buffer_arg) {
  return lc_pb.SafeItemExt.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lc_schema_ZItemExtList(arg) {
  if (!(arg instanceof lc_pb.ZItemExtList)) {
    throw new Error('Expected argument of type lc.schema.ZItemExtList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lc_schema_ZItemExtList(buffer_arg) {
  return lc_pb.ZItemExtList.deserializeBinary(new Uint8Array(buffer_arg));
}


var LcServiceService = exports.LcServiceService = {
  // immudb primitives
// setters and getters
set: {
    path: '/lc.schema.LcService/Set',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.KeyValue,
    responseType: schema_pb.Index,
    requestSerialize: serialize_immudb_schema_KeyValue,
    requestDeserialize: deserialize_immudb_schema_KeyValue,
    responseSerialize: serialize_immudb_schema_Index,
    responseDeserialize: deserialize_immudb_schema_Index,
  },
  get: {
    path: '/lc.schema.LcService/Get',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.Key,
    responseType: schema_pb.Item,
    requestSerialize: serialize_immudb_schema_Key,
    requestDeserialize: deserialize_immudb_schema_Key,
    responseSerialize: serialize_immudb_schema_Item,
    responseDeserialize: deserialize_immudb_schema_Item,
  },
  safeSet: {
    path: '/lc.schema.LcService/SafeSet',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.SafeSetOptions,
    responseType: schema_pb.Proof,
    requestSerialize: serialize_immudb_schema_SafeSetOptions,
    requestDeserialize: deserialize_immudb_schema_SafeSetOptions,
    responseSerialize: serialize_immudb_schema_Proof,
    responseDeserialize: deserialize_immudb_schema_Proof,
  },
  safeGet: {
    path: '/lc.schema.LcService/SafeGet',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.SafeGetOptions,
    responseType: schema_pb.SafeItem,
    requestSerialize: serialize_immudb_schema_SafeGetOptions,
    requestDeserialize: deserialize_immudb_schema_SafeGetOptions,
    responseSerialize: serialize_immudb_schema_SafeItem,
    responseDeserialize: deserialize_immudb_schema_SafeItem,
  },
  // batch
setBatch: {
    path: '/lc.schema.LcService/SetBatch',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.KVList,
    responseType: schema_pb.Index,
    requestSerialize: serialize_immudb_schema_KVList,
    requestDeserialize: deserialize_immudb_schema_KVList,
    responseSerialize: serialize_immudb_schema_Index,
    responseDeserialize: deserialize_immudb_schema_Index,
  },
  getBatch: {
    path: '/lc.schema.LcService/GetBatch',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.KeyList,
    responseType: schema_pb.ItemList,
    requestSerialize: serialize_immudb_schema_KeyList,
    requestDeserialize: deserialize_immudb_schema_KeyList,
    responseSerialize: serialize_immudb_schema_ItemList,
    responseDeserialize: deserialize_immudb_schema_ItemList,
  },
  // scanners
scan: {
    path: '/lc.schema.LcService/Scan',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.ScanOptions,
    responseType: schema_pb.ItemList,
    requestSerialize: serialize_immudb_schema_ScanOptions,
    requestDeserialize: deserialize_immudb_schema_ScanOptions,
    responseSerialize: serialize_immudb_schema_ItemList,
    responseDeserialize: deserialize_immudb_schema_ItemList,
  },
  history: {
    path: '/lc.schema.LcService/History',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.HistoryOptions,
    responseType: schema_pb.ItemList,
    requestSerialize: serialize_immudb_schema_HistoryOptions,
    requestDeserialize: deserialize_immudb_schema_HistoryOptions,
    responseSerialize: serialize_immudb_schema_ItemList,
    responseDeserialize: deserialize_immudb_schema_ItemList,
  },
  zAdd: {
    path: '/lc.schema.LcService/ZAdd',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.ZAddOptions,
    responseType: schema_pb.Index,
    requestSerialize: serialize_immudb_schema_ZAddOptions,
    requestDeserialize: deserialize_immudb_schema_ZAddOptions,
    responseSerialize: serialize_immudb_schema_Index,
    responseDeserialize: deserialize_immudb_schema_Index,
  },
  safeZAdd: {
    path: '/lc.schema.LcService/SafeZAdd',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.SafeZAddOptions,
    responseType: schema_pb.Proof,
    requestSerialize: serialize_immudb_schema_SafeZAddOptions,
    requestDeserialize: deserialize_immudb_schema_SafeZAddOptions,
    responseSerialize: serialize_immudb_schema_Proof,
    responseDeserialize: deserialize_immudb_schema_Proof,
  },
  zScan: {
    path: '/lc.schema.LcService/ZScan',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.ZScanOptions,
    responseType: schema_pb.ZItemList,
    requestSerialize: serialize_immudb_schema_ZScanOptions,
    requestDeserialize: deserialize_immudb_schema_ZScanOptions,
    responseSerialize: serialize_immudb_schema_ZItemList,
    responseDeserialize: deserialize_immudb_schema_ZItemList,
  },
  // mixed
currentRoot: {
    path: '/lc.schema.LcService/CurrentRoot',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: schema_pb.Root,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_immudb_schema_Root,
    responseDeserialize: deserialize_immudb_schema_Root,
  },
  health: {
    path: '/lc.schema.LcService/Health',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: schema_pb.HealthResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_immudb_schema_HealthResponse,
    responseDeserialize: deserialize_immudb_schema_HealthResponse,
  },
  // ledger compliance extensions
reportTamper: {
    path: '/lc.schema.LcService/ReportTamper',
    requestStream: false,
    responseStream: false,
    requestType: lc_pb.ReportOptions,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_lc_schema_ReportOptions,
    requestDeserialize: deserialize_lc_schema_ReportOptions,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  sendData: {
    path: '/lc.schema.LcService/SendData',
    requestStream: true,
    responseStream: true,
    requestType: lc_pb.Data,
    responseType: lc_pb.Response,
    requestSerialize: serialize_lc_schema_Data,
    requestDeserialize: deserialize_lc_schema_Data,
    responseSerialize: serialize_lc_schema_Response,
    responseDeserialize: deserialize_lc_schema_Response,
  },
  // ledger compliance extensions - items extended with additional properties managed by LC backend (date)
safeGetExt: {
    path: '/lc.schema.LcService/SafeGetExt',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.SafeGetOptions,
    responseType: lc_pb.SafeItemExt,
    requestSerialize: serialize_immudb_schema_SafeGetOptions,
    requestDeserialize: deserialize_immudb_schema_SafeGetOptions,
    responseSerialize: serialize_lc_schema_SafeItemExt,
    responseDeserialize: deserialize_lc_schema_SafeItemExt,
  },
  zScanExt: {
    path: '/lc.schema.LcService/ZScanExt',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.ZScanOptions,
    responseType: lc_pb.ZItemExtList,
    requestSerialize: serialize_immudb_schema_ZScanOptions,
    requestDeserialize: deserialize_immudb_schema_ZScanOptions,
    responseSerialize: serialize_lc_schema_ZItemExtList,
    responseDeserialize: deserialize_lc_schema_ZItemExtList,
  },
  historyExt: {
    path: '/lc.schema.LcService/HistoryExt',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.HistoryOptions,
    responseType: lc_pb.ItemExtList,
    requestSerialize: serialize_immudb_schema_HistoryOptions,
    requestDeserialize: deserialize_immudb_schema_HistoryOptions,
    responseSerialize: serialize_lc_schema_ItemExtList,
    responseDeserialize: deserialize_lc_schema_ItemExtList,
  },
};

exports.LcServiceClient = grpc.makeGenericClientConstructor(LcServiceService);
