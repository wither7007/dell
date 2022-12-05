#!/bin/bash
awsk () {
awk '!a[$0]++'  ~/.sqlite_history >testfile.tmp  && mv testfile.tmp  ~/.sqlite_history
        #awk '!a[$0]++' ~/.sqlite_history > .sqlite_history
        nvim ~/.sqlite_history
}
