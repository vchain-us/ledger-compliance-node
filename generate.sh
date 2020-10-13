set -e
set -x

SRC_PATH=proto
DEST_PATH=proto/build
SERVICE=lc.proto
LIBRARY=lc_pb

# remove the dest directory
if [ -d "$DEST_PATH" ]; then rm -Rf $DEST_PATH; fi

# recreate dest directory
mkdir $DEST_PATH

# generate js codes via grpc-tools [CommonJS imports]
./node_modules/grpc-tools/bin/protoc.js \
    -I$SRC_PATH \
    -I./node_modules/protobufjs \
    --js_out=import_style=commonjs,binary:$DEST_PATH \
    --grpc_out=import_style=commonjs,binary:$DEST_PATH \
    --plugin==protc-gen-grpc=./node_modules/grpc-tools/bin/grpc_node_plugin \
    $SRC_PATH/*.proto \
    node_modules/protobufjs/google/**/*.proto