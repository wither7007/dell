#!/usr/bin/sh -

main() {
    for mycommand do
        printf >&2 '%s\n' "Checking $mycommand"
        if ! command -v -- "$mycommand" > /dev/null 2>&1; then
            printf >&2 '%s\n' "I think I am missing $mycommand"
        fi
    done
}

main less asdf fd
