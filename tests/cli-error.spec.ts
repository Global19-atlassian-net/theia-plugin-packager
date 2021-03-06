/*********************************************************************
* Copyright (c) 2018-2019 Red Hat, Inc.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/

import * as fs from "fs";
import { CliError } from "../src/cli-error";

describe("Test Custom Cli Error", () => {

    test("test error", async () => {
        const errMessage: string = "custom message";
        try {
            throw new CliError(errMessage);
        } catch (error) {
            expect(error.message).toMatch(errMessage);
        }
    });

});
