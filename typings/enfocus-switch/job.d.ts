
export class Job {
    constructor();

    // Getting job file/folder information

    /** Returns the absolute file or folder path for the job as it resides in the input folder, including unique filename prefix. */
    getPath(): string;

    /** Returns the absolute file or folder path for the job as it resides in the input folder, including unique filename prefix. */
     getPath(): string;

    /** Returns the unique filename prefix used for the job, without the underscores. For example, for a job called "_0G63D_myjob.txt" this function would return "0G63D". */
    getUniqueNamePrefix(): string;

    /** Returns the file or folder name for the job, including filename extension if present, but excluding the unique filename prefix. */
    getName(): string;

    /** Returns the file or folder name for the job excluding filename extension and excluding the unique filename prefix. */
    getNameProper(): string;

    /** Returns the job's filename extension, or the empty string if there is none. */
    getExtension(): string;

    /**  Returns the job's Mac file type code as a 4-character string if available, otherwise the empty string. */
    getMacType(): string;

    /** Returns the job's Mac creator code as a 4-character string if available, otherwise the empty string. */
    getMacCreator(): string;

    /**
     * Returns true if the job matches the specified file type, specified as a filename extension, and false otherwise.
     *
     * A file matches if its filename extension and/or its Mac file type (after conversion) match the specified filename extension. A folder matches if any of the files at the topmost level inside the folder match the specified type. These semantics are similar to those of matching cross-platform file types in filter connections.
     * */
    isType( ext : String ): boolean;

    /** Returns true if the job is a single file, false otherwise. */
    isFile(): boolean;

    /** Returns true if the job is a folder, false otherwise. */
    isFolder(): boolean;

    /** Returns the number of files in the job. If it is a single file, the function returns 1. If it is a job folder, the function returns the number of files in the job folder and any subfolders, recursively (folders and subfolders themselves do not contribute to the count). */
    getFileCount(): number;

    /** Returns the size in bytes of the job. If it is a job folder, all files in subfolders are included in the count, recursively. */
    getByteCount(): number;

}

declare module "enfocus-switch-job" {
    export = Job;
}

