import * as path from "path";
var fs_promise = require("fs/promises");
const { mkdir, writeFile, unlink, rmdir } = fs_promise;

const LOCAL_PB_LOCK_PATH = path.resolve(__dirname, `../config.lock`);

class Lock {
    static hasLock = false;

    public async lock() {
        if (Lock.hasLock) return Promise.reject(`已经有方法处理中`);
        try {
            await mkdir(LOCAL_PB_LOCK_PATH);
            await writeFile(LOCAL_PB_LOCK_PATH + '/' + process.pid, 'lock');
            Lock.hasLock = true;
            return 'success';
        } catch (err) {
            console.warn(`[mock]lock error ${err}`);
            return Promise.reject(`加锁失败`);
        }
    }

    public async unlock() {
        if (!Lock.hasLock) return "success";

        try {
            await unlink(LOCAL_PB_LOCK_PATH + '/' + process.pid);
            await rmdir(LOCAL_PB_LOCK_PATH);
            Lock.hasLock = false;
            return "success";
        } catch (err) {
            console.warn(`unlock error ${err}`);
            return "success";
        }
    }
}

export default new Lock();
