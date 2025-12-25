const Terms = () => {
  return (
    <section className="relative w-full min-h-screen bg-black pt-32 pb-20 smofonts">
      <div className="mx-auto w-[90%] max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm uppercase tracking-widest text-purple-400 mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-sans">
            Terms and Conditions
          </h1>
          <p className="text-lg text-white/70">
            Last updated: 23rd December 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-sm">
            <p className="text-white/80 mb-8 leading-relaxed">
              These Terms and Conditions ("Terms") govern access to and use of the Scout Me Online platform ("SMO", "we", "us", "our"), including all websites, applications, software, analysis systems, content, and related services.
            </p>
            <p className="text-white/80 mb-12 leading-relaxed">
              By creating an account or using SMO, you agree to these Terms. If you do not agree, you must not use the platform.
            </p>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-sans">
                <span className="text-purple-400">1.</span>
                <span>WHAT SMO IS (AND IS NOT)</span>
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4 font-sans">1.1 What SMO is</h3>
                <p className="text-white/80 mb-4">SMO is a technology platform that provides:</p>
                <ul className="space-y-2 text-white/80 ml-6 list-disc">
                  <li>Football match video analysis</li>
                  <li>Rules-based performance data and KPIs</li>
                  <li>Player, coach, scout, and club profiles</li>
                  <li>Search, filtering, comparison, and discovery tools</li>
                  <li>Platform activity and engagement visibility</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4 font-sans">1.2 What SMO is not</h3>
                <p className="text-white/80 mb-4">SMO is not:</p>
                <ul className="space-y-2 text-white/80 ml-6 list-disc">
                  <li>A football agent or intermediary</li>
                  <li>A recruiter or representative of any club</li>
                  <li>A decision-maker</li>
                  <li>A guarantee of trials, contracts, scholarships, or career outcomes</li>
                </ul>
                <p className="text-white/80 mt-4">
                  All recruitment, selection, and scouting decisions are made independently by third parties.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-sans">
                <span className="text-purple-400">2.</span>
                <span>ELIGIBILITY AND AGE REQUIREMENTS</span>
              </h2>
              <ul className="space-y-3 text-white/80 ml-6 list-disc">
                <li>You must be at least 13 years old to create an SMO account.</li>
                <li>Users aged 13–17 must have consent from a parent or legal guardian.</li>
                <li>Parents or guardians may manage accounts on behalf of minors.</li>
                <li>Children under 13 years old may not create accounts.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-sans">
                <span className="text-purple-400">3.</span>
                <span>ACCOUNTS AND USER RESPONSIBILITY</span>
              </h2>
              <ul className="space-y-3 text-white/80 ml-6 list-disc">
                <li>You are responsible for all activity on your account.</li>
                <li>You must keep login credentials secure.</li>
                <li>SMO may suspend or terminate accounts that breach these Terms or misuse the platform.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-sans">
                <span className="text-purple-400">4.</span>
                <span>CONTENT, LICENCES, AND RESPONSIBILITY</span>
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4 font-sans">4.1 Ownership</h3>
                <p className="text-white/80">
                  You retain ownership of any original content you upload or submit, including videos and profile information.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4 font-sans">4.2 Licence granted to SMO</h3>
                <p className="text-white/80 mb-4">
                  By uploading or submitting content (including video files or URLs), you grant SMO a worldwide, non-exclusive, royalty-free, sublicensable licence to:
                </p>
                <ul className="space-y-2 text-white/80 ml-6 list-disc mb-4">
                  <li>Host, process, analyse, annotate, and display the content within the platform</li>
                  <li>Generate analysis outputs, tags, KPIs, and visual overlays</li>
                  <li>Display tagged players, line-ups, and analysis results</li>
                  <li>Use anonymised or non-identifiable excerpts for platform demonstration, education, and marketing purposes</li>
                </ul>
                <p className="text-white/80 mb-4">
                  SMO may create provisional player profiles as part of match analysis. Such profiles may later be claimed, edited, or deleted by the relevant individual.
                </p>
                <p className="text-white/80">
                  This licence does not transfer ownership of the original content to SMO.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4 font-sans">4.3 Your responsibility when submitting content</h3>
                <p className="text-white/80 mb-4">You confirm that:</p>
                <ul className="space-y-2 text-white/80 ml-6 list-disc mb-4">
                  <li>You have the legal right to submit the content or link</li>
                  <li>Required consents (including for minors) have been obtained</li>
                  <li>The content does not violate laws or third-party rights</li>
                </ul>
                <p className="text-white/80">
                  SMO relies on user confirmations and does not independently verify ownership or consent.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-sans">
                <span className="text-purple-400">5.</span>
                <span>PROFILE VIEWS, MATCH VIEWS, AND ACTIVITY VISIBILITY</span>
              </h2>
              <p className="text-white/80 mb-4">
                SMO may track and display activity and engagement data across the platform, including:
              </p>
              <ul className="space-y-2 text-white/80 ml-6 list-disc mb-4">
                <li>Profile views</li>
                <li>Match and analysis page views</li>
                <li>Content engagement trends</li>
              </ul>
              <p className="text-white/80 mb-4">
                Depending on subscription level and privacy settings, users may see:
              </p>
              <ul className="space-y-2 text-white/80 ml-6 list-disc mb-6">
                <li>Aggregated view counts</li>
                <li>Viewer roles (e.g. player, coach, scout)</li>
                <li>Viewer identity</li>
              </ul>
              <div className="bg-cyan-500/20 border border-cyan-400/40 rounded-xl p-4">
                <p className="text-pink-400 font-semibold mb-2">IMPORTANT:</p>
                <p className="text-white/90">
                  Activity data reflects platform usage only. It does not indicate interest, evaluation, intent, or recruitment decisions.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-sans">
                <span className="text-purple-400">6.</span>
                <span>SEARCH, FILTERING, RANKINGS, AND COMPARISONS</span>
              </h2>
              <p className="text-white/80 mb-4">
                Users may search and filter profiles based on criteria such as age, country, position, and performance metrics.
              </p>
              <p className="text-white/80 mb-4">
                Rankings and KPIs are generated from analysed match data using defined criteria.
              </p>
              <p className="text-white/80 mb-6">
                Comparisons are user-initiated tools.
              </p>
              <div className="bg-cyan-500/20 border border-cyan-400/40 rounded-xl p-4 mb-4">
                <p className="text-pink-400 font-semibold mb-3">DISCLAIMERS:</p>
                <ul className="space-y-2 text-white/90 ml-4 list-disc">
                  <li>Rankings are descriptive, not evaluative</li>
                  <li>KPIs are interpretations based on defined methodology and may differ from other systems or opinions</li>
                  <li>KPIs do not account for all contextual factors such as tactics, opposition level, or role</li>
                  <li>SMO does not endorse, recommend, or rank players, coaches, or clubs for recruitment</li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-sans">
                <span className="text-purple-400">7.</span>
                <span>MATCH VIDEOS AND CLUB PRIVACY</span>
              </h2>
              <p className="text-white/80 mb-4">
                Clubs may create public or private club pages.
              </p>
              <p className="text-white/80 mb-4">
                Private clubs control access to team-level data.
              </p>
              <p className="text-white/80 mb-4">
                Match pages may display tagged players and line-ups without revealing full team analytics.
              </p>
              <p className="text-white/80 mb-4">
                Team performance data is not publicly shared.
              </p>
              <p className="text-white/80">
                SMO balances club privacy with player visibility and platform discovery.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-sans">
                <span className="text-purple-400">8.</span>
                <span>NEWSFEED, INSIGHTS, AND PLATFORM ACTIVITY</span>
              </h2>
              <p className="text-white/80 mb-4">
                SMO may display informational platform activity and aggregated insights, including:
              </p>
              <ul className="space-y-2 text-white/80 ml-6 list-disc mb-6">
                <li>New users or clubs joining</li>
                <li>Matches analysed or pending</li>
                <li>Line-ups published</li>
                <li>Aggregated usage trends and performance insights</li>
              </ul>
              <p className="text-white/80">
                All such information is anonymised or aggregated where appropriate and is provided for informational and educational purposes only. It does not imply quality, interest, endorsement, or outcomes.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-sans">
                <span className="text-purple-400">9.</span>
                <span>ANALYSIS OUTPUTS AND AI SYSTEMS</span>
              </h2>
              <p className="text-white/80 mb-4">
                Analysis may be automated, AI-assisted, human-reviewed, or a combination.
              </p>
              <p className="text-white/80 mb-4">
                Analysis is rules-based and aligned with defined football event criteria.
              </p>
              <p className="text-white/80 mb-4">
                Some actions require interpretation and may be classified differently by other systems or professionals.
              </p>
              <p className="text-white/80 mb-4">
                Errors, delays, or differences in interpretation may occur.
              </p>
              <p className="text-white/80 mb-4">
                Users may flag potential issues for review. SMO may apply human review and corrections where appropriate.
              </p>
              <p className="text-white/80">
                Analysis outputs are informational only and do not replace professional judgement. SMO does not guarantee accuracy, completeness, or suitability for any purpose.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-sans">
                <span className="text-purple-400">10.</span>
                <span>SUBSCRIPTIONS, QUEUES, AND PROCESSING TIMES</span>
              </h2>
              <p className="text-white/80 mb-4">
                Some features require paid subscriptions.
              </p>
              <p className="text-white/80 mb-4">
                Free plans may include usage limits or waiting queues.
              </p>
              <p className="text-white/80 mb-4">
                Paid plans may include priority processing.
              </p>
              <p className="text-white/80">
                All stated processing times (including fast or lightning speed) are targets, not guarantees, and may vary due to system load, video length, or technical factors.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-sans">
                <span className="text-purple-400">11.</span>
                <span>PROHIBITED USE</span>
              </h2>
              <p className="text-white/80 mb-4">You must not:</p>
              <ul className="space-y-2 text-white/80 ml-6 list-disc">
                <li>Upload unlawful, misleading, or infringing content</li>
                <li>Impersonate others or misrepresent authority</li>
                <li>Scrape, reverse-engineer, or exploit the platform</li>
                <li>Use SMO for unlawful or deceptive purposes</li>
              </ul>
            </div>

            {/* Section 12 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-sans">
                <span className="text-purple-400">12.</span>
                <span>INTELLECTUAL PROPERTY</span>
              </h2>
              <p className="text-white/80">
                All platform software, systems, methodologies, branding, and proprietary processes belong to SMO.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-sans">
                <span className="text-purple-400">13.</span>
                <span>DATA PROTECTION AND PRIVACY</span>
              </h2>
              <p className="text-white/80 mb-4">
                Personal data is processed in accordance with SMO's Privacy Policy and applicable data protection laws, including GDPR.
              </p>
              <p className="text-white/80">
                Users may request access, correction, deletion, or anonymisation of personal data. Anonymised performance data may be retained to preserve match and team integrity.
              </p>
            </div>

            {/* Section 14 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-sans">
                <span className="text-purple-400">14.</span>
                <span>TERMINATION</span>
              </h2>
              <p className="text-white/80">
                SMO may suspend or terminate access to enforce these Terms, protect users, or comply with legal obligations.
              </p>
            </div>

            {/* Section 15 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-sans">
                <span className="text-purple-400">15.</span>
                <span>LIMITATION OF LIABILITY</span>
              </h2>
              <p className="text-white/80 mb-4">To the maximum extent permitted by law:</p>
              <ul className="space-y-2 text-white/80 ml-6 list-disc">
                <li>SMO is not liable for indirect or consequential losses</li>
                <li>SMO is not responsible for third-party decisions or outcomes</li>
                <li>Total liability is limited to fees paid in the previous 12 months</li>
              </ul>
            </div>

            {/* Section 16 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-sans">
                <span className="text-purple-400">16.</span>
                <span>CHANGES TO THESE TERMS</span>
              </h2>
              <p className="text-white/80 mb-4">
                SMO may update these Terms from time to time.
              </p>
              <p className="text-white/80 mb-4">
                Where changes are material, reasonable steps will be taken to notify users.
              </p>
              <p className="text-white/80">
                Continued use of the platform constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* Section 17 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-sans">
                <span className="text-purple-400">17.</span>
                <span>GOVERNING LAW</span>
              </h2>
              <p className="text-white/80">
                These Terms are governed by the laws of England and Wales, unless mandatory local law applies.
              </p>
            </div>

            {/* Section 18 */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-sans">
                <span className="text-purple-400">18.</span>
                <span>CONTACT</span>
              </h2>
              <p className="text-white/80 mb-4">For legal enquiries:</p>
              <a
                href="mailto:legal@scoutmeonline.com"
                className="text-purple-400 hover:text-purple-300 transition-colors text-lg font-semibold"
              >
                legal@scoutmeonline.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Terms

