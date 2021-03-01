// import fs from 'fs'
// import process from 'process'

// import messages from '../../src/proto/schema_pb'

// const CUSTOM_ROOT = '__CUSTOM ROOT__:'

// let root = {}
// let rootPath

// const exitHandler = () => {
//   if (rootPath) {
//     console.log(`${CUSTOM_ROOT} exitHandler`)
//     let data = JSON.stringify(root)
//     fs.writeFileSync(rootPath, data)
//   }
// }

// process.on('exit', exitHandler)
// process.on('SIGINT', exitHandler)
// process.on('uncaughtException', exitHandler)

// export default {
//   set: (params) => {
//     console.log(`${CUSTOM_ROOT} set`)
//     try {
//         const rootPb = new messages.RootIndex()
//         rootPb.setIndex(params.index)
//         rootPb.setRoot(params.root)
    
//         if (!root[params.server]) {
//           root[params.server] = {
//             [params.database]: rootPb,
//           }
//           return
//         }
    
//         root[params.server][params.database] = rootPb
//     } catch (err) {
//         console.error(err)
//     }
//   },

//   get: (params) => {
//     try {
//         console.log(`${CUSTOM_ROOT} get`)
//         let serverRoot = root[params.server]
//         if (!serverRoot) {
//             return {
//                 index: 0,
//                 root: [],
//             }
//         }

//         let rootPb = serverRoot[params.database]
//         if (!rootPb) {
//             return {
//                 index: 0,
//                 root: [],
//             }
//         }

//         if (!rootPb.hasOwnProperty('getIndex') ||
//             !rootPb.hasOwnProperty('getRoot')) {
//             const _rootPb = new messages.RootIndex()
//             _rootPb.setIndex(rootPb.index)
//             _rootPb.setRoot(rootPb.root)
//             rootPb = _rootPb
//         }

//         return {
//             index: rootPb.getIndex(),
//             root: rootPb.getRoot(),
//         }
//     } catch (err) {
//         console.error(err)
//     }
// },

//   setRootPath: (params) => {
//     console.log(`${CUSTOM_ROOT} setRootPath`)
//     try {
//         rootPath = params.path

//         if (fs.existsSync(rootPath)) {
//             let rawdata = fs.readFileSync(rootPath)
//             root = JSON.parse(rawdata)
//             return
//         }

//         let data = JSON.stringify(root)
//         fs.writeFileSync(rootPath, data)
//     } catch (err) {
//         console.error(err)
//     }        
//   },

//   commit: () => {
//     console.log(`${CUSTOM_ROOT} commit`)
//     try {
//         let data = JSON.stringify(root)
//         fs.writeFileSync(rootPath, data)
//     } catch (err) {
//         console.error(err)
//     }        
//   },
// }
