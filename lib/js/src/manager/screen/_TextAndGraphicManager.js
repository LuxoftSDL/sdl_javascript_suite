/*
* Copyright (c) 2020, Livio, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* Redistributions of source code must retain the above copyright notice, this
* list of conditions and the following disclaimer.
*
* Redistributions in binary form must reproduce the above copyright notice,
* this list of conditions and the following
* disclaimer in the documentation and/or other materials provided with the
* distribution.
*
* Neither the name of the Livio Inc. nor the names of its contributors
* may be used to endorse or promote products derived from this software
* without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

import { _TextAndGraphicManagerBase } from './_TextAndGraphicManagerBase.js';
import { SdlArtwork } from '../file/filetypes/SdlArtwork.js';
import { FileType } from '../../rpc/enums/FileType.js';

class _TextAndGraphicManager extends _TextAndGraphicManagerBase {
    /**
     * Initializes an instance of _TextAndGraphicManager.
     * @class
     * @param {_LifecycleManager} lifecycleManager - An instance of _LifecycleManager.
     * @param {FileManager} fileManager - An instance of FileManager.
     * @param {_SoftButtonManager} softButtonManager - An instance of _SoftButtonManager.
     */
    constructor (lifecycleManager, fileManager, softButtonManager) {
        super(lifecycleManager, fileManager, softButtonManager);
    }

    /**
     * Creates or returns a blank artwork. Implements the abstract method
     * @private
     * @returns {SdlArtwork} - A blank SdlArtwork instance.
     */
    _getBlankArtwork () {
        if (this._blankArtwork === null) {
            this._blankArtwork = new SdlArtwork('blankArtwork', FileType.GRAPHIC_PNG, new Array(50), true);
        }
        return this._blankArtwork;
    }
}

export { _TextAndGraphicManager };
