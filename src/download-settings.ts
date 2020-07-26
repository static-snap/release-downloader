export interface IReleaseDownloadSettings {
  /**
   * The source repository path. Expected format {owner}/{repo}
   */
  sourceRepoPath: string

  /**
   * A flag to choose between latest release and remaining releases
   */
  isLatest: boolean

  /**
   * The release tag
   */
  tag: string

  /**
   * Name of the file to download
   */
  fileName: string

  /**
   * Download ttarball from release
   */
  tarBall: boolean

  /**
   * Download zipball from release
   */
  zipBall: boolean

  /**
   * Target path to download the file
   */
  outFilePath: string

  /**
   * Github access token to download from private repos (Optional)
   */
  token?: string
}
