// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Copyright 2021 CodeNotary, Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
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

function serialize_immudb_schema_Entries(arg) {
  if (!(arg instanceof schema_pb.Entries)) {
    throw new Error('Expected argument of type immudb.schema.Entries');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_Entries(buffer_arg) {
  return schema_pb.Entries.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_Entry(arg) {
  if (!(arg instanceof schema_pb.Entry)) {
    throw new Error('Expected argument of type immudb.schema.Entry');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_Entry(buffer_arg) {
  return schema_pb.Entry.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ExecAllRequest(arg) {
  if (!(arg instanceof schema_pb.ExecAllRequest)) {
    throw new Error('Expected argument of type immudb.schema.ExecAllRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ExecAllRequest(buffer_arg) {
  return schema_pb.ExecAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_immudb_schema_HistoryRequest(arg) {
  if (!(arg instanceof schema_pb.HistoryRequest)) {
    throw new Error('Expected argument of type immudb.schema.HistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_HistoryRequest(buffer_arg) {
  return schema_pb.HistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ImmutableState(arg) {
  if (!(arg instanceof schema_pb.ImmutableState)) {
    throw new Error('Expected argument of type immudb.schema.ImmutableState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ImmutableState(buffer_arg) {
  return schema_pb.ImmutableState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_KeyListRequest(arg) {
  if (!(arg instanceof schema_pb.KeyListRequest)) {
    throw new Error('Expected argument of type immudb.schema.KeyListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_KeyListRequest(buffer_arg) {
  return schema_pb.KeyListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_KeyRequest(arg) {
  if (!(arg instanceof schema_pb.KeyRequest)) {
    throw new Error('Expected argument of type immudb.schema.KeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_KeyRequest(buffer_arg) {
  return schema_pb.KeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ScanRequest(arg) {
  if (!(arg instanceof schema_pb.ScanRequest)) {
    throw new Error('Expected argument of type immudb.schema.ScanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ScanRequest(buffer_arg) {
  return schema_pb.ScanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_SetRequest(arg) {
  if (!(arg instanceof schema_pb.SetRequest)) {
    throw new Error('Expected argument of type immudb.schema.SetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_SetRequest(buffer_arg) {
  return schema_pb.SetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_TxMetadata(arg) {
  if (!(arg instanceof schema_pb.TxMetadata)) {
    throw new Error('Expected argument of type immudb.schema.TxMetadata');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_TxMetadata(buffer_arg) {
  return schema_pb.TxMetadata.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_VerifiableEntry(arg) {
  if (!(arg instanceof schema_pb.VerifiableEntry)) {
    throw new Error('Expected argument of type immudb.schema.VerifiableEntry');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_VerifiableEntry(buffer_arg) {
  return schema_pb.VerifiableEntry.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_VerifiableGetRequest(arg) {
  if (!(arg instanceof schema_pb.VerifiableGetRequest)) {
    throw new Error('Expected argument of type immudb.schema.VerifiableGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_VerifiableGetRequest(buffer_arg) {
  return schema_pb.VerifiableGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_VerifiableSetRequest(arg) {
  if (!(arg instanceof schema_pb.VerifiableSetRequest)) {
    throw new Error('Expected argument of type immudb.schema.VerifiableSetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_VerifiableSetRequest(buffer_arg) {
  return schema_pb.VerifiableSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_VerifiableTx(arg) {
  if (!(arg instanceof schema_pb.VerifiableTx)) {
    throw new Error('Expected argument of type immudb.schema.VerifiableTx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_VerifiableTx(buffer_arg) {
  return schema_pb.VerifiableTx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_VerifiableZAddRequest(arg) {
  if (!(arg instanceof schema_pb.VerifiableZAddRequest)) {
    throw new Error('Expected argument of type immudb.schema.VerifiableZAddRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_VerifiableZAddRequest(buffer_arg) {
  return schema_pb.VerifiableZAddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ZAddRequest(arg) {
  if (!(arg instanceof schema_pb.ZAddRequest)) {
    throw new Error('Expected argument of type immudb.schema.ZAddRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ZAddRequest(buffer_arg) {
  return schema_pb.ZAddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ZEntries(arg) {
  if (!(arg instanceof schema_pb.ZEntries)) {
    throw new Error('Expected argument of type immudb.schema.ZEntries');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ZEntries(buffer_arg) {
  return schema_pb.ZEntries.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ZScanRequest(arg) {
  if (!(arg instanceof schema_pb.ZScanRequest)) {
    throw new Error('Expected argument of type immudb.schema.ZScanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ZScanRequest(buffer_arg) {
  return schema_pb.ZScanRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_lc_schema_VerifiableItemExt(arg) {
  if (!(arg instanceof lc_pb.VerifiableItemExt)) {
    throw new Error('Expected argument of type lc.schema.VerifiableItemExt');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lc_schema_VerifiableItemExt(buffer_arg) {
  return lc_pb.VerifiableItemExt.deserializeBinary(new Uint8Array(buffer_arg));
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
    requestType: schema_pb.SetRequest,
    responseType: schema_pb.TxMetadata,
    requestSerialize: serialize_immudb_schema_SetRequest,
    requestDeserialize: deserialize_immudb_schema_SetRequest,
    responseSerialize: serialize_immudb_schema_TxMetadata,
    responseDeserialize: deserialize_immudb_schema_TxMetadata,
  },
  get: {
    path: '/lc.schema.LcService/Get',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.KeyRequest,
    responseType: schema_pb.Entry,
    requestSerialize: serialize_immudb_schema_KeyRequest,
    requestDeserialize: deserialize_immudb_schema_KeyRequest,
    responseSerialize: serialize_immudb_schema_Entry,
    responseDeserialize: deserialize_immudb_schema_Entry,
  },
  verifiableSet: {
    path: '/lc.schema.LcService/VerifiableSet',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.VerifiableSetRequest,
    responseType: schema_pb.VerifiableTx,
    requestSerialize: serialize_immudb_schema_VerifiableSetRequest,
    requestDeserialize: deserialize_immudb_schema_VerifiableSetRequest,
    responseSerialize: serialize_immudb_schema_VerifiableTx,
    responseDeserialize: deserialize_immudb_schema_VerifiableTx,
  },
  verifiableGet: {
    path: '/lc.schema.LcService/VerifiableGet',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.VerifiableGetRequest,
    responseType: schema_pb.VerifiableEntry,
    requestSerialize: serialize_immudb_schema_VerifiableGetRequest,
    requestDeserialize: deserialize_immudb_schema_VerifiableGetRequest,
    responseSerialize: serialize_immudb_schema_VerifiableEntry,
    responseDeserialize: deserialize_immudb_schema_VerifiableEntry,
  },
  // batch
getAll: {
    path: '/lc.schema.LcService/GetAll',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.KeyListRequest,
    responseType: schema_pb.Entries,
    requestSerialize: serialize_immudb_schema_KeyListRequest,
    requestDeserialize: deserialize_immudb_schema_KeyListRequest,
    responseSerialize: serialize_immudb_schema_Entries,
    responseDeserialize: deserialize_immudb_schema_Entries,
  },
  execAll: {
    path: '/lc.schema.LcService/ExecAll',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.ExecAllRequest,
    responseType: schema_pb.TxMetadata,
    requestSerialize: serialize_immudb_schema_ExecAllRequest,
    requestDeserialize: deserialize_immudb_schema_ExecAllRequest,
    responseSerialize: serialize_immudb_schema_TxMetadata,
    responseDeserialize: deserialize_immudb_schema_TxMetadata,
  },
  // scanners
scan: {
    path: '/lc.schema.LcService/Scan',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.ScanRequest,
    responseType: schema_pb.Entries,
    requestSerialize: serialize_immudb_schema_ScanRequest,
    requestDeserialize: deserialize_immudb_schema_ScanRequest,
    responseSerialize: serialize_immudb_schema_Entries,
    responseDeserialize: deserialize_immudb_schema_Entries,
  },
  history: {
    path: '/lc.schema.LcService/History',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.HistoryRequest,
    responseType: schema_pb.Entries,
    requestSerialize: serialize_immudb_schema_HistoryRequest,
    requestDeserialize: deserialize_immudb_schema_HistoryRequest,
    responseSerialize: serialize_immudb_schema_Entries,
    responseDeserialize: deserialize_immudb_schema_Entries,
  },
  zAdd: {
    path: '/lc.schema.LcService/ZAdd',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.ZAddRequest,
    responseType: schema_pb.TxMetadata,
    requestSerialize: serialize_immudb_schema_ZAddRequest,
    requestDeserialize: deserialize_immudb_schema_ZAddRequest,
    responseSerialize: serialize_immudb_schema_TxMetadata,
    responseDeserialize: deserialize_immudb_schema_TxMetadata,
  },
  verifiableZAdd: {
    path: '/lc.schema.LcService/VerifiableZAdd',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.VerifiableZAddRequest,
    responseType: schema_pb.VerifiableTx,
    requestSerialize: serialize_immudb_schema_VerifiableZAddRequest,
    requestDeserialize: deserialize_immudb_schema_VerifiableZAddRequest,
    responseSerialize: serialize_immudb_schema_VerifiableTx,
    responseDeserialize: deserialize_immudb_schema_VerifiableTx,
  },
  zScan: {
    path: '/lc.schema.LcService/ZScan',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.ZScanRequest,
    responseType: schema_pb.ZEntries,
    requestSerialize: serialize_immudb_schema_ZScanRequest,
    requestDeserialize: deserialize_immudb_schema_ZScanRequest,
    responseSerialize: serialize_immudb_schema_ZEntries,
    responseDeserialize: deserialize_immudb_schema_ZEntries,
  },
  // mixed
currentState: {
    path: '/lc.schema.LcService/CurrentState',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: schema_pb.ImmutableState,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_immudb_schema_ImmutableState,
    responseDeserialize: deserialize_immudb_schema_ImmutableState,
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
verifiableGetExt: {
    path: '/lc.schema.LcService/VerifiableGetExt',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.VerifiableGetRequest,
    responseType: lc_pb.VerifiableItemExt,
    requestSerialize: serialize_immudb_schema_VerifiableGetRequest,
    requestDeserialize: deserialize_immudb_schema_VerifiableGetRequest,
    responseSerialize: serialize_lc_schema_VerifiableItemExt,
    responseDeserialize: deserialize_lc_schema_VerifiableItemExt,
  },
  zScanExt: {
    path: '/lc.schema.LcService/ZScanExt',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.ZScanRequest,
    responseType: lc_pb.ZItemExtList,
    requestSerialize: serialize_immudb_schema_ZScanRequest,
    requestDeserialize: deserialize_immudb_schema_ZScanRequest,
    responseSerialize: serialize_lc_schema_ZItemExtList,
    responseDeserialize: deserialize_lc_schema_ZItemExtList,
  },
  historyExt: {
    path: '/lc.schema.LcService/HistoryExt',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.HistoryRequest,
    responseType: lc_pb.ItemExtList,
    requestSerialize: serialize_immudb_schema_HistoryRequest,
    requestDeserialize: deserialize_immudb_schema_HistoryRequest,
    responseSerialize: serialize_lc_schema_ItemExtList,
    responseDeserialize: deserialize_lc_schema_ItemExtList,
  },
};

exports.LcServiceClient = grpc.makeGenericClientConstructor(LcServiceService);
