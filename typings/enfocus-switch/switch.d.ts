
export class Switch {
    constructor();

    /*=========================================================
        Accessing the flow definition
     ==========================================================*/

    /** Returns the name of the flow, as displayed in the Flows pane, in which this script resides. */
    getFlowName(): string;

    /** Returns the name of the flow element associated with this script as displayed in the canvas. */
    getElementName(): string;

    /**
     * Returns a string that uniquely identifies the flow element associated with this script (within the limits of the guarantees described below). Callers should not rely on the syntax of the returned string as this may change between Switch versions.
     */
    getElementID(): string;

    /** Returns the name of this script as defined in the script declaration. */
    getScriptName(): string

    /** Returns a list of Connection instances representing the incoming connections forthe flow element associated with this script. The list is in arbitrary order. If there are no incoming connections the list is empty. */
    getInConnections(): ConnectionList

    /** Returns a list of Connection instances representing the outgoing connections for the flow element associated with this script. The list is in arbitrary order. If there are no outgoing connections the list is empty. */
    getOutConnections(): ConnectionList

    /** Returns a list of names for the outgoing connections in alphabetical order. If a connection name is empty the target folder name is used as a fall-back. If the folder name is empty as well, the connection is not listed. */
    getOutgoingName(): Array<string>

    /** Returns a list of available codecs. */
    getAvailableCodecs(): Array<string>

    /*=========================================================
        Accessing injected properties
     ==========================================================*/

    /**
     * Returns the value of the injected flow element property with the specified tag for the script element associated with this script. If the specified tag is not defined in the script declaration, the function returns null. If the property has a string list value, this function returns the first string in the list.
     * @param tag
     * @param job
     */
    getPropertyValue( tag: string, job: Job ): string|null;

    /**
     * Returns the string list value of the injected flow element property with the specified tag for the script element associated with this script. If the specified tag is not defined in the script declaration, the function returns null. If the property has a single-string value, this function returns a list with a single string.

     * @param tag
     * @param job
     */
    getPropertyValueList( tag: string, job: Job ): Array<string>|null;

    /**
     * Returns the name of the property editor that was used to enter the value for the specified property. In case a property offers multiple editors, this information may be required to correctly interpret the property value. If the specified tag is not defined in the script declaration, the function returns null.
     * @param tag
     */
    getPropertyEditor( tag: string ): string|null;

    /**
     *  Returns true if the value for the specified property is guaranteed not to change between entry point invocations for this flow element as long as the containing flow remains active; false otherwise. If the specified tag is not defined in the script declaration, the function returns null.
     * @param tag
     */
    isPropertyValueStatic( tag: string ): boolean|null;

    /**
     * Returns true if the getPropertyValue() or getPropertyValueList() functions return an actual value for the specified property, in other words if the property value is static or if the flow is active so that the property value can be computed.

     Returns false if the getPropertyValue() or getPropertyValueList() functions return the source value for the specified property, in other words if the property value is not static and the flow is inactive.

     If the specified tag is not defined in the script declaration, the function returns null.
     * @param tag
     */
    isPropertyValueActual( tag: string ): boolean|null;

    /*=========================================================
        Working with jobs and processes
    ==========================================================*/

    /**
     * Returns a list of Job instances representing all of the jobs currently waiting in the input folders for the flow element. The list is in arbitrary order and includes all jobs that have "arrived" in the jobArrived entry point, and including the job passed to the current invocation of the jobArrived entry point. If there are no such jobs, the list is empty.
     */
    getJobs(): JobList;

    /**
     * Returns a list of Job instances representing all of the jobs currently waiting in the input folders for the specified incoming connection. Same semantics as for the getJobs function apply.
     * @deprecated since Switch 13. Please use getJobs( ) instead.
     * @param c
     */
    getJobsForConnection( c: Connection ): JobList;

    /**
     * Returns a Job instance representing a new job that does not correspond to an incoming job. The job is given a fresh job ticket with default values. The file path associated with the job is the empty string.
     * @param origin
     */
    createNewJob( origin?: string ): Job;

    /**
     * Logs a fatal error with the specified message and puts the flow element instance in the "problem process" state, without providing the context of a particular job.
     * @param message
     * @param extra
     */
    failProcess( message: string, extra?: string|number ): void;

    /*=========================================================
        Accessing the timer interval
     ==========================================================*/

    /**
     * Sets the interval, in seconds, between subsequent invocations of the timerFired entry point (if it has been declared in the script).
     * @param seconds
     */
    setTimerInterval( seconds: number ): void;

    /**
     * Returns the interval, in seconds between subsequent invocations of the timerFired entry point.
     */
    getTimerInterval(): number;

    /**
     * Returns true if the flow in which this script resides is attempting to deactivate at the time of invocation; false otherwise.
     */
    isDeactivating(): boolean;

    /*=========================================================
        Accessing the file statistics
     ==========================================================*/

    /**
     * Returns the file creation statistics.
     * @param path
     */
    createFileStatistics( path:string ): FileStatistics;

}

declare module "enfocus-switch-switch" {
    export = Switch;
}