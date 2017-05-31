export default {
    /**
     * 删除数据中符合条件的元素
     * @param {array} ary 源数组
     * @param {function} filter 过滤条件
     */
    deleteItem(ary, filter) {
        if (ary == null || ary.length <= 0) {
            return;
        }
        for (var i = ary.length - 1; i > 0; i--) {
            var item = ary[i];
            if (filter(item)) {
                ary.splice(i, 1);
            }
        }
    },
    /**
     * 找出数组中符合要求的一个元素，当没找到或找到多个则报异常
     * @param {array} ary 源数组
     * @param {function} filter 过滤条件
     */
    single(ary, filter) {
        var item = singleOrDefault(ary, filter);
        if (item == null) {
            console.error('[arrayExt] 在数组中没找到符合条件的元素.');
            return;
        }
        return item;
    },
    /**
     * 找出数组中符合要求的一个元素，当没找时返回null，找到多个时报异常
     * @param {array} ary 源数组
     * @param {function} filter 过滤条件
     */
    singleOrDefault(ary, filter) {
        var items = ary.filter(filter);
        if (items == null || items.length <= 0) {
            return null;
        }
        if (items.length > 1) {
            console.error('[arrayExt] 在数组中找到了多个符合条件的元素.');
            return;
        }
        return items[0];
    }
}