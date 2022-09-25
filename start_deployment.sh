#!/bin/bash

echo "You want remove current build?"
read REMOVE_ACTUAL_BUILD
if [ -d "$(pwd)/build" ] && test "$REMOVE_ACTUAL_BUILD" = "t";
    then
        echo "Build alredy exist"
        echo "Delete..."
        sudo rm -r "$(pwd)/build"
    fi

echo "Starting Build"
npm run build